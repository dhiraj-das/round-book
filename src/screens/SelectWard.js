import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextField, CircularButton } from '../components';
import { createUser } from '../managers/AuthManager';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class SelectWard extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: 'white',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        const { container, 
            title,
            buttonContainer 
        } = styles;

        return(
            <View style={container}>
                <Text style={title}>To get started, join an existing ward or create your own...</Text>
            </View>
        )
    }
}

var { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        paddingLeft: 20,
        paddingRight: 20,
        color: 'black',
        fontFamily: 'CircularStd-Medium',
        fontSize: 15,
    }
});