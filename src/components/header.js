import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component{

    render() {
        return (
            <View>
                <Text>{this.props.header}</Text>
            </View>
        );
    }
}

export default Header;