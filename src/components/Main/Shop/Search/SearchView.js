import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class SearchView extends Component {
    gotoProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFCA28' }}>
                <Text>Search</Text>
                <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
                    <Text>go to ProductDetail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


