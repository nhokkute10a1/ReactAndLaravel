import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#007ACC' }}>
                <Text>View Authentication</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go to Homes</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

