import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import styles from './../../../style/style';

import iMenu from './../../../media/appIcon/ic_menu.png';
import iLogo from './../../../media/appIcon/ic_logo.png';

import global from '../../global';
import search from '../../../api/searchProduct';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }
    onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        search(txtSearch)
            .then(arrProduct => global.setSearchArry(arrProduct))
            .catch(err => console.log('===ERROR===', err));
    }
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
                    //an gach chan
                    underlineColorAndroid={'transparent'}
                    //sau khi search xoa di
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    //chuyen sang search
                    onFocus={() => global.gotoSearch()}
                    //enter  no se thuc thi tim kiem
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}
