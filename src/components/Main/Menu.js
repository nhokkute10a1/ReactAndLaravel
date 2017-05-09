import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../../style/style';

import iUser from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false };
    }
    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }
    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }
    gotoOrderHistory() {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }


    render() {
        const { menuContainer, profile, btnStyle, btnText, btnSignInStyle, btnTextSignIn, loginContainer } = styles;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        
        const loginJSX = (
            <View style={loginContainer}>
                <Text style={{ color: '#FFF', }}>Đoàn Thu Thủy</Text>
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoAuthentication.bind(this)}>
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX;
        return (
            <View style={menuContainer}>
                <Image source={iUser} style={profile} />
                { mainJSX}
            </View>
        );
    }
}

