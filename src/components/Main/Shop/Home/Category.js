import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from '../../../../style/style';
import iBanner1 from '../../../../media/temp/little.jpg';
import iBanner2 from '../../../../media/temp/fit.jpg';
import iBanner3 from '../../../../media/temp/maxi.jpg';

export default class Category extends Component {
    render() {
        const { wapperColl, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wapperColl}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>LIST OF CATEGORY </Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                     <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        <Image source={iBanner1} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={iBanner2} style={imageStyle} >
                             <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={iBanner3} style={imageStyle} >
                             <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}  
const { width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
