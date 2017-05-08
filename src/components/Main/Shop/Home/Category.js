import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from '../../../../style/style';
import iBanner1 from '../../../../media/temp/little.jpg';
import iBanner2 from '../../../../media/temp/fit.jp';
import iBanner3 from '../../../../media/temp/maxi.jpg';

export default class Category extends Component {
    render() {
        const { wapperColl, textStyle, imageStyle } = styles;
        return (
            <View style={wapperColl}>
                <View style={{ flex: 1 }}>
                    <Text style={textStyle}>SPRING COLLECTION </Text>
                </View>
                <Swiper style={{ flex: 4 }} >
                    <Image source={iBanner1} style={imageStyle} />
                    <Image source={iBanner2} style={imageStyle} />
                    <Image source={iBanner3} style={imageStyle} />
                </Swiper>
            </View>
        );
    }
}  
