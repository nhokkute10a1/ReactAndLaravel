import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from '../../../../style/style';
//import iBanner1 from '../../../../media/temp/little.jpg';
// import iBanner2 from '../../../../media/temp/fit.jpg';
// import iBanner3 from '../../../../media/temp/maxi.jpg';
const url = 'http://192.168.56.1/api/images/type/';

export default class Category extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { types } = this.props;
        const { wapperColl, textStyle, imageStyle, cateTitle } = styles;
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                {/*//map: tu 1 mang tra ve mang khac, tu 1 doi tuong lam j do
                            key: phan biet components vs nhau
                        */}

                {types.map(e => (
                    <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key={e.id}>
                        {/*<Image source={{ uri: `http://192.168.56.1/api/images/type/${e.image}` }} style={imageStyle} >
                            <Text style={cateTitle}>{e.name}</Text>
                        </Image>*/}
                        <Image source={{ uri: `${url}${e.image}` }} style={imageStyle} >
                            <Text style={cateTitle}>{e.name}</Text>
                        </Image>
                    </TouchableOpacity>
                ))}
            </Swiper>
        );
        return (
            <View style={wapperColl}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    {types.length ? swiper : null}
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
