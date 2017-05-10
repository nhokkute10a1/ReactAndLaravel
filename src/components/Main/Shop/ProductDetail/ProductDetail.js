import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../../../style/style';

import iBack from '../../../../media/appIcon/back.png';
import iCart from '../../../../media/appIcon/cart.png';

export default class ProductDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#D6D6D6' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Image source={iBack} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={iCart} />
                </TouchableOpacity>
                
            </View>
        );
    }
}
