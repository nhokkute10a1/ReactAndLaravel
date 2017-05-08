import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../../../style/style';
import iBanner from '../../../../media/temp/banner.jpg';

export default class Collection extends Component {
    render() {
        const { wapperColl, textStyle, imageStyle } = styles;
        return (
            <View style={wapperColl}>
                <View style={{ flex: 1 }}>
                    <Text style={textStyle}>SPRING COLLECTION </Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Image source={iBanner} style={imageStyle} />
                </View>
            </View>
        );
    }
}  
