import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { signOut } from '../managers/AuthManager';

export default class Profile extends Component {
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
            textfield, 
            loginContainer,
            button 
        } = styles;

        return(
            <View style={container}>
                <Text style={title}>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        paddingTop: 30,
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 30,
        fontWeight: 'bold'
    }
});