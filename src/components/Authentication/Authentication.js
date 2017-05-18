import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';

import styles from '../../style/style';

import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';

import iBack from '../../media/appIcon/back_white.png';
import iLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    gotoSignIn() {
        this.setState({ isSignIn: true });
    }
    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const {
            authentication, signOutStyle, signInStyle, iconStyleAuthe,
            controlStyle, rowAuthen, titleStyleAuthe, inActiveStyle, activeStyle,
    } = styles;
        const signInJSX = (
            <SignIn goBackToMain={this.goBackToMain.bind(this)} />
        );
        const signUpJSX = (
           < SignUp gotoSignIn={this.gotoSignIn.bind(this)} />

        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={authentication}>
                <View style={rowAuthen}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={iBack} style={iconStyleAuthe} />
                    </TouchableOpacity>
                    <Text style={titleStyleAuthe}> Wearing a Dress</Text>
                    <Image source={iLogo} style={iconStyleAuthe} />
                </View>

                {mainJSX}

                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inActiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signOutStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inActiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

