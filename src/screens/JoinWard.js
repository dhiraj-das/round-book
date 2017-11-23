import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextField } from '../components';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class JoinWard extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: 'white',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    constructor(props) {
        super(props);
        this.state = {user: ''};
    }
    
    render() {
        const { container, 
            image,
            hint,
            button,
            buttonText,
            buttonContainer
        } = styles;

        return(
            <View style={container}>
                <Text style={hint}>Enter Pin or Scan QR code</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    image: {
        marginTop: 50,
        height: 100,
        opacity: 0.15,
        width: 100,
        alignSelf: 'center'
    },
    hint: {
        paddingTop: 10,
        color: '#C0C0C0',
        fontFamily: 'CircularStd-Medium',
        fontSize: 15,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    },
    button: {
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 5,
        backgroundColor: '#008080'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'CircularStd-Medium',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});