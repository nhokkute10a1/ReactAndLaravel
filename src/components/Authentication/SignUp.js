import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from '../../style/style';
import register from '../../api/register';


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }
    
    onSuccess() {
        Alert.alert(
            'Thông báo',
            'Đăng ký thành công',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() },
            ],
            { cancelable: false }
        );
    }
    onFail() {
        Alert.alert(
            'Thông báo',
            'Email đã tồn tại ',
            [
                { text: 'OK', onPress: this.removeEmail.bind(this) },
            ],
            { cancelable: false }
        );
    }
    registerUser() {
        const { name, email, password, rePassword } = this.state;
        register(email, name, password, rePassword)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                this.onFail();
                console.log(res);
            });
    }
    removeEmail() {
        this.setState({ email: '' });
    }
    render() {
        const { inputStyle, btnsignIn } = styles;
        const { email, name, password, rePassword } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle} placeholder="Enter your name"
                    underlineColorAndroid={'transparent'}
                    value={name}
                    onChangeText={text => this.setState({ name: text })}
                />
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
                <TextInput
                    style={inputStyle} placeholder="Re-enter your password"
                    secureTextEntry
                    underlineColorAndroid={'transparent'}
                    value={rePassword}
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={btnsignIn} onPress={this.registerUser.bind(this)}>
                    <Text style={{ color: '#FFF' }}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
