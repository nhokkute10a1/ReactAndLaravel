import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ListView, RefreshControl } from 'react-native';

import iBack from '../../../../media/appIcon/backList.png';
//import iproducr from '../../../../media/temp/54.jpg';
import styles from '../../../../style/style';
import getListProduct from '../../../../api/getListProduct';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const url = 'http://192.168.56.1/api/images/product/';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            listProducts: ds,
            refreshing: false,
            page: 1
        };
        //noi mang sp
        this.arr = [];
    }
    componentDidMount() {
        const idType = this.props.category.id;
        getListProduct(idType, 1)
            .then(arrProduct => {
                this.arr = arrProduct;
                this.setState({ listProducts: this.state.listProducts.cloneWithRows(this.arr) });
            })
            .catch(error => console.log('=====ERROR=====', error));
    }
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    gotoDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }

    render() {
        const {
            header, containerList, iconBack, wapperList, titleStyleList,
            containerPro, productInfo, lastRowInfo, imagePro, txtName, txtPrice,
            txtShowDetail
        } = styles;
        const { category } = this.props;
        return (
            <View style={containerList}>
                <View style={wapperList}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iBack} style={iconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyleList}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <ListView
                        removeClippedSubviews={false}
                        //contentContainerStyle={containerPro}
                        dataSource={this.state.listProducts}
                        renderRow={product => (
                            <View style={containerPro}>
                                <Image
                                    source={{ uri: `${url}${product.images[0]}` }}
                                    style={imagePro}
                                />
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(product.name)}</Text>
                                    <Text style={txtPrice}>{product.price}$</Text>
                                    <Text>Materia {product.material}</Text>
                                    <View style={lastRowInfo}>
                                        <Text>Color {product.color}</Text>
                                        <View
                                            style={{
                                                backgroundColor: product.color.toLowerCase(),
                                                height: 16,
                                                width: 16,
                                                borderRadius: 8
                                            }}
                                        />
                                        <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({ refreshing: true });
                                    const newPage = this.state.page + 1;
                                    const idType = this.props.category.id;
                                    getListProduct(idType, newPage)
                                        .then(arrProduct => {
                                            this.arr = arrProduct.concat(this.arr);
                                            this.setState({
                                                //...this.state, - lay toan bo thong tin cua state
                                                listProducts:
                                                this.state.listProducts.cloneWithRows(this.arr),
                                                refreshing: false
                                            });
                                        })
                                        .catch(error => console.log(error));
                                }}
                            />
                        }
                    />
                </View>
            </View>
            /*<ScrollView style={containerList}>
                <View style={wapperList}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iBack} style={iconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyleList}>{category.name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <View style={containerPro}>
                        <Image source={iproducr} style={imagePro} />
                        <View style={productInfo}>
                            <Text style={txtName}>Name</Text>
                            <Text style={txtPrice}>116$</Text>
                            <Text>Materia silk</Text>
                            <View style={lastRowInfo}>
                                <Text>Color</Text>
                                <View style={colorView} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>*/
        );
    }
}
