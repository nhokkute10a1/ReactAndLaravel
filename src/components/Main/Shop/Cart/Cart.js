import React, { Component } from 'react';
import { Navigator } from 'react-native';

import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from './CartView';

export default class Cart extends Component {
    render() {
        const { cartArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'CART_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'CART_VIEW':
                            return <CartView navigator={navigator} cartArray={cartArray} />;
                        default: return <ProductDetail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

