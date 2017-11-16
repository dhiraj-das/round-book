import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/RoundedButton';

export default class Onboarding extends Component {
    static navigatorStyle = {
        navBarHidden: true
      };
    
    render() {
        const { container, 
            title, 
            loginContainer,
            button 
        } = styles;

        return(
            <View style={container}>
                <Text style={title}>Welcome to Round Book.</Text>
                <View style={loginContainer}>
                    <Button style={button}>Login</Button>
                    <Button style={button}>Create Account</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007e8c',
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        color: '#f7fbfb',
        paddingTop: 80,
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 27
    },
    loginContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30
    }
});