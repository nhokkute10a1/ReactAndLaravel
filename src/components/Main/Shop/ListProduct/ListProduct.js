import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import iBack from '../../../../media/appIcon/backList.png';
import iproducr from '../../../../media/temp/54.jpg';
import styles from '../../../../style/style';

export default class ListProduct extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const {
            header, containerList, iconBack, wapperList, titleStyleList,
            containerPro, productInfo, lastRowInfo, imagePro, txtName, txtPrice,
           txtShowDetail 
    } = styles;
        return (
            <ScrollView style={containerList}>
                <View style={wapperList}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iBack} style={iconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyleList}>Party Dress</Text>
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
                                <View style={{ backgroundColor: 'cyan', height: 10, width: 10, borderRadius: 5 }} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={containerPro}>
                        <Image source={iproducr} style={imagePro} />
                        <View style={productInfo}>
                            <Text style={txtName}>Name</Text>
                            <Text style={txtPrice}>116$</Text>
                            <Text>Materia silk</Text>
                            <View style={lastRowInfo}>
                                <Text>Color</Text>
                                <View style={{ backgroundColor: 'cyan', height: 10, width: 10, borderRadius: 5 }} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={containerPro}>
                        <Image source={iproducr} style={imagePro} />
                        <View style={productInfo}>
                            <Text style={txtName}>Name</Text>
                            <Text style={txtPrice}>116$</Text>
                            <Text>Materia silk</Text>
                            <View style={lastRowInfo}>
                                <Text>Color</Text>
                                <View style={{ backgroundColor: 'cyan', height: 10, width: 10, borderRadius: 5 }} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={containerPro}>
                        <Image source={iproducr} style={imagePro} />
                        <View style={productInfo}>
                            <Text style={txtName}>Name</Text>
                            <Text style={txtPrice}>116$</Text>
                            <Text>Materia silk</Text>
                            <View style={lastRowInfo}>
                                <Text>Color</Text>
                                <View style={{ backgroundColor: 'cyan', height: 10, width: 10, borderRadius: 5 }} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={containerPro}>
                        <Image source={iproducr} style={imagePro} />
                        <View style={productInfo}>
                            <Text style={txtName}>Name</Text>
                            <Text style={txtPrice}>116$</Text>
                            <Text>Materia silk</Text>
                            <View style={lastRowInfo}>
                                <Text>Color</Text>
                                <View style={{ backgroundColor: 'cyan', height: 10, width: 10, borderRadius: 5 }} />
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}
