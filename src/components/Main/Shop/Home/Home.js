import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Homes extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#E3DFDF' }}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
        );
    }
}

