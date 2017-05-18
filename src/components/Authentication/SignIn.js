import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../style/style';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';
import getToken from '../../api/getToken';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    //test
    // componentDidMount() {
    //     getToken()
    //     .then(a => console.log('TOKEN:::::::::' + a));
    // }
    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => {
            global.onSignIn(res.user);
            this.props.goBackToMain();
            saveToken(res.token);
        })
        .catch(error => console.log(error));
    }
    
    render() {
        const { inputStyle, btnsignIn } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle} placeholder="Enter your email"
                    underlineColorAndroid={'transparent'}
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle} placeholder="Enter your password"
                    secureTextEntry
                    underlineColorAndroid={'transparent'}
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity style={btnsignIn} onPress={this.onSignIn.bind(this)}>
                    <Text style={{ color: '#FFF' }}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
