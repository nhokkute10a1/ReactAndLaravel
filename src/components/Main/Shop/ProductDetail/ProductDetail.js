import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../../../style/style';
import global from '../../../global';
import iBack from '../../../../media/appIcon/back.png';
import iCart from '../../../../media/appIcon/cart.png';
// import isp1 from '../../../../media/temp/54.jpg';
// import isp2 from '../../../../media/temp/sp5.jpeg';

const url = 'http://192.168.56.1/api/images/product/';

export default class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    addCart() {
        const { product } = this.props;
        global.addProductToCart(product);
    }
    render() {
        const {
            containerList, wapperList, header, iconBack, productImage, imageContainer,
            footer, titleContainerPro, textMain, textBlack, textHighlight, textSmoke,
            descContainer, descStyle, txtMaterial, txtColor, viewStyle
        } = styles;
        const { name, price, color, material, description, images } = this.props.product;
        return (
            <View style={containerList}>
                <View style={wapperList}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iBack} style={iconBack} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addCart.bind(this)}>
                            <Image source={iCart} style={iconBack} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <Image source={{ uri: `${url}${images[0]}` }} style={productImage} />
                        <Image source={{ uri: `${url}${images[1]}` }} style={productImage} />
                    </View>
                    <View style={footer}>
                        <View style={titleContainerPro}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>
                                {description}
                            </Text>
                            <View style={viewStyle}>
                                <Text style={txtMaterial}>Material {material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>Color {color}</Text>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: color.toLowerCase(),
                                            borderRadius: 15,
                                            marginLeft: 10,
                                            borderWidth: 1,
                                            borderColor: '#C21C70'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
