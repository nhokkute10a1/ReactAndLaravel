import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        const { types, topProducts } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#E3DFDF' }}>
                <Collection />
                <Category navigator={this.props.navigator} types={types} />
                <TopProduct navigator={this.props.navigator} topProducts={topProducts} />
            </ScrollView>
        );
    }
}

