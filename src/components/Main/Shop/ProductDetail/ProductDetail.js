import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../../../style/style';

import iBack from '../../../../media/appIcon/back.png';
import iCart from '../../../../media/appIcon/cart.png';
import isp1 from '../../../../media/temp/54.jpg';
import isp2 from '../../../../media/temp/sp5.jpeg';

export default class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const {
            containerList, wapperList, header, iconBack, productImage, imageContainer,
            footer, titleContainerPro, textMain, textBlack, textHighlight, textSmoke,
            descContainer, descStyle, txtMaterial, txtColor, viewStyle, colorPro
        } = styles;
        return (
            <View style={containerList}>
                <View style={wapperList}>
                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={iBack} style={iconBack} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={iCart} style={iconBack} />
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <Image source={isp1} style={productImage} />
                        <Image source={isp2} style={productImage} />
                    </View>
                    <View style={footer}>
                        <View style={titleContainerPro}>
                            <Text style={textMain}>
                                <Text style={textBlack}>Name</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>192$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>
                                Tưng bừng mua sắm với những sản phẩm được bán chạy nhất tại YaMe.
                                 Đặc biệt áo thun Kiri GIÁ CHỈ 79K vẫn chưa có dấu hiệu hạ nhiệt ^^
                            </Text>
                            <View style={viewStyle}>
                                <Text style={txtMaterial}>Material </Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>Color </Text>
                                    <View style={colorPro} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
