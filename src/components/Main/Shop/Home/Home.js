import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Collection from './Collection';
import Category from './Category';

export default class Homes extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#E3DFDF' }}>
                <Collection />
                <Category />
            </View>
        );
    }
}

