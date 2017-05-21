import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import styles from '../../../../style/style';
import iBanner from '../../../../media/temp/banner.jpg';

export default class Collection extends Component {
    gotoListProduct() {
        const { navigator } = this.props;
        navigator.push({
            name: 'LIST_PRODUCT',
            category: { name: 'SPRING COLLECTION', id: 'COLLECTION' }
        });
    }
    render() {
        const { wapperColl, textStyle, imageStyle } = styles;
        return (
            <View style={wapperColl}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>SPRING COLLECTION </Text>
                </View>
                <TouchableOpacity
                    style={{ flex: 4, justifyContent: 'flex-end' }}
                    onPress={this.gotoListProduct.bind(this)}
                >
                    <Image source={iBanner} style={imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}  
