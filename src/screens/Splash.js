import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressHUD } from '../components/ProgressHUD';
import firebase from 'react-native-firebase';
import { showSelectWard } from '../common/ScreenRouter';

export default class Splash extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: '#007e8c',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    static navigatorButtons = {
        leftButtons: [
          {
            icon: require('../../assets/img/back.png'),
            id: 'back-button',
            disableIconTint: true,
          }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {        
        var unsubscriber = firebase.auth().onAuthStateChanged(user => {
            unsubscriber();
            this.setState({isLoading: false});
            if(user) {
                showSelectWard();
                return;
            }
            this.props.navigator.resetTo({
                screen: 'RoundBook.Onboarding',
                animated: true,
                animationType: 'fade',
                backButtonHidden: true
            });
        });
    }
    
    render() {
        const { container, 
            title  
        } = styles;

        return(
            <View style={container}>
                <Text style={title}>Welcome to Round Book.</Text>
                <ProgressHUD 
                    isAnimating={this.state.isLoading}
                    isBig
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007e8c',
        flex: 1
    },
    title: {
        color: '#f7fbfb',
        paddingTop: 60,
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 27
    }
});