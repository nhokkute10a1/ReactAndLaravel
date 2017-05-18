import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../../style/style';
import global from '../global';

import iUser from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null };
        global.onSignIn = this.onSignIn.bind(this);
    }
    onSignIn(user) {
        this.setState({ user });
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
        const {
             menuContainer, profile, btnStyle, btnText, btnSignInStyle,
            btnTextSignIn, loginContainer
        } = styles;
        const { user } = this.state;
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={{ color: '#FFF', }}>{user ? user.name : ''}</Text>
                <View style={{ marginTop: 100 }}>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={this.gotoChangeInfo.bind(this)}
                    >
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={this.gotoOrderHistory.bind(this)}
                    >
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={btnSignInStyle}
                        onPress={this.gotoAuthentication.bind(this)}
                    >
                        <Text style={btnTextSignIn}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={menuContainer}>
                <Image source={iUser} style={profile} />
                {mainJSX}
            </View>
        );
    }
}

