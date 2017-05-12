import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import styles from '../../../../style/style';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    gotoProductDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { container, titleContainer, body, title,
            productContainer, productImage, productName, productPrice
        } = styles;
        return (

            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.gotoProductDetail.bind(this)}
                    >
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.gotoProductDetail.bind(this)}
                    >
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>150$</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }} />
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.gotoProductDetail.bind(this)}
                    >
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={productContainer}
                        onPress={this.gotoProductDetail.bind(this)}
                    >
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>150$</Text>
                    </TouchableOpacity>

                </View>
            </View >
        );
    }
}

const { width } = Dimensions.get('window');
