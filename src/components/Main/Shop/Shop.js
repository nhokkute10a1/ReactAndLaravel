import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Homes from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';

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
        this.state = { selectedTab: 'home' };
    }
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#16A085' }}>
                <Header onOpen={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
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
                        <Homes />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() =>
                            <Image source={iCart0} style={{ width: 20, height: 20 }} />
                        }
                        renderSelectedIcon={() =>
                            <Image source={iCart} style={{ width: 20, height: 20 }} />
                        }
                        selectedTitleStyle={{ color: '#16A085' }}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
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
                        selected={this.state.selectedTab === 'contact'}
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
