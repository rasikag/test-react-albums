import React from 'react';
import {Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 60
    },
    viewStyle: {
        backgroundColor: '#aee7fc',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset: { width: 0, height :2},
        shadowOpacity: 0.2 
    }
};

export default Header;