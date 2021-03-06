import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ListView } from 'react-native';

import styles from '../../../../style/style';

//import sp1 from '../../../../media/temp/sp1.jpeg';
// import sp2 from '../../../../media/temp/sp2.jpeg';
// import sp3 from '../../../../media/temp/sp3.jpeg';
// import sp4 from '../../../../media/temp/sp4.jpeg';
const url = 'http://192.168.56.1/api/images/product/';
export default class TopProduct extends Component {
    // constructor(props) {
    //     super(props);
    //     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //     const { topProducts } = this.props;
    //     this.state = {
    //         dataSource: ds.cloneWithRows(topProducts),
    //     };
    // }
    gotoProductDetail(product) {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL', product });
    }
    render() {
        const { container, titleContainer, body, title,
            productContainer, productImage, productName, productPrice
        } = styles;
        const { topProducts } = this.props;
        return (

            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <ListView
                        contentContainerStyle={body}
                        enableEmptySections
                        dataSource={
                            new ListView.DataSource(
                                { rowHasChanged: (r1, r2) => r1 !== r2 }
                            ).cloneWithRows(topProducts)
                        }
                        renderRow={(e) => (
                            <TouchableOpacity
                                style={productContainer}
                                onPress={() => this.gotoProductDetail(e)}
                            >
                                <Image
                                    source={{ uri: `${url}${e.images[0]}` }}
                                    style={productImage}
                                />
                                <Text style={productName}>{e.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{e.price}$</Text>
                            </TouchableOpacity>
                        )}
                        renderSeparator={(sectionId, rowId) => {
                            if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
                        }}
                    />
                </View>
                {/*xem log*/}
                {/*<TouchableOpacity onPress={() => console.log(this.props.topProducts)}>
                    <Text>LOG</Text>
                </TouchableOpacity>*/}
            </View >
        );
    }
}

const { width } = Dimensions.get('window');

