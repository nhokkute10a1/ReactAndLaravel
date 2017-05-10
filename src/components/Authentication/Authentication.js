import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, TextInput, Button
} from 'react-native';

import styles from '../../style/style';

import iBack from '../../media/appIcon/back_white.png';
import iLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
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
            inputStyle, btnsignIn
    } = styles;
        const signInJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid={'transparent'} />
                <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid={'transparent'} />
                <TouchableOpacity style={btnsignIn} >
                    <Text style={{ color: '#FFF' }}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View>
                <TextInput style={inputStyle} placeholder="Enter your name" underlineColorAndroid={'transparent'} />
                <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid={'transparent'} />
                <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid={'transparent'} />
                <TextInput style={inputStyle} placeholder="Re-enter your password" underlineColorAndroid={'transparent'} />
                <TouchableOpacity style={btnsignIn}>
                    <Text style={{ color: '#FFF' }}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>

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

