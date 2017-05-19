import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Homes from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';

import global from '../../global';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

import iHome from './../../../media/appIcon/home.png';
import iHome0 from './../../../media/appIcon/home0.png';
import iCart from './../../../media/appIcon/cart.png';
import iCart0 from './../../../media/appIcon/cart0.png';
import iContact from './../../../media/appIcon/contact.png';
import iContact0 from './../../../media/appIcon/contact0.png';
import iSearch from './../../../media/appIcon/search.png';
import iSearch0 from './../../../media/appIcon/search0.png';

import Header from './Header';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            types: [],
            topProducts: [],
            cartArray: []
        };
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.gotoSearch = this.gotoSearch.bind(this);
    }

    componentDidMount() {
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProducts: product });
            });
        getCart()
            .then(cartArray => this.setState({ cartArray }));
    }
    gotoSearch() {
        this.setState({ selectedTab: 'search' });
    }
    addProductToCart(product) {
        /**
         * la phuoc thuc bat dong bo nen sd phuong thuc go back function
         */
        this.setState({ cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
            () => saveCart(this.state.cartArray)
        );
    }
    incrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity + 1 };
        });
        this.setState({
            cartArray: newCart
        },
            () => saveCart(this.state.cartArray)
        );
    }
    decrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity - 1 };
        });
        this.setState({
            cartArray: newCart
        },
            () => saveCart(this.state.cartArray)
        );
    }
    removeProduct(productId) {
        const newCart = this.state.cartArray.filter(e => e.product.id !== productId);
        this.setState({
            cartArray: newCart
        },
            () => saveCart(this.state.cartArray)
        );
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { types, selectedTab, topProducts, cartArray } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#16A085' }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        renderIcon={() =>
                            <Image source={iHome0} style={{ width: 20, height: 20 }} />
                        }
                        renderSelectedIcon={() =>
                            <Image source={iHome} style={{ width: 20, height: 20 }} />
                        }
                        selectedTitleStyle={{ color: '#16A085' }}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Homes types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() =>
                            <Image source={iCart0} style={{ width: 20, height: 20 }} />
                        }
                        renderSelectedIcon={() =>
                            <Image source={iCart} style={{ width: 20, height: 20 }} />
                        }
                        selectedTitleStyle={{ color: '#16A085' }}
                        badgeText={cartArray.length}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        renderIcon={() =>
                            <Image source={iSearch0} style={{ width: 20, height: 20 }} />
                        }
                        renderSelectedIcon={() =>
                            <Image source={iSearch} style={{ width: 20, height: 20 }} />
                        }
                        selectedTitleStyle={{ color: '#16A085' }}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() =>
                            <Image source={iContact0} style={{ width: 20, height: 20 }} />
                        }
                        renderSelectedIcon={() =>
                            <Image source={iContact} style={{ width: 20, height: 20 }} />
                        }
                        selectedTitleStyle={{ color: '#16A085' }}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

