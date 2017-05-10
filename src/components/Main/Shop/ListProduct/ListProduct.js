import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import iBack from '../../../../media/appIcon/backList.png';

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
        return (
            <View style={{ flex: 1, backgroundColor: '#E7E7E7' }}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Image source={iBack} />
                </TouchableOpacity>
               <Text>Party Dress</Text>
               <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                    <Text>go to detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
