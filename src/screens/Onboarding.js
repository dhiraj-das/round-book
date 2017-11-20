import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components';

export default class Onboarding extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#007e8c',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };
    
    onLoginPressed() {
        this.props.navigator.push({
            screen: 'RoundBook.SignIn',
            animated: true,
            backButtonTitle: undefined,
            backButtonHidden: true,
          });
    }

    onCreateAccountPressed() {
        this.props.navigator.push({
            screen: 'RoundBook.CreateAccount',
            animated: true,
            backButtonTitle: undefined,
            backButtonHidden: true,
          });
    }

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
                    <RoundedButton 
                        style={button}
                        onPressOut={this.onLoginPressed.bind(this)}
                    >
                        Login
                    </RoundedButton>
                    <RoundedButton 
                        style={button}
                        onPressOut={this.onCreateAccountPressed.bind(this)}
                    >
                        Create Account
                    </RoundedButton>
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
        paddingTop: 60,
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