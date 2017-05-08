import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import styles from './../../../style/style';

import iMenu from './../../../media/appIcon/ic_menu.png';
import iLogo from './../../../media/appIcon/ic_logo.png';

export default class Header extends Component {
    render() {
        const { wapper, icon, row1, textInput, titleStyle } = styles;
        return (
            <View style={wapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={iMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={titleStyle}> Wearing a Dress</Text>
                    <Image source={iLogo} style={icon} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}
