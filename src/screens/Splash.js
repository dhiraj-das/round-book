import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressHUD } from '../components/ProgressHUD';
import firebase from 'react-native-firebase';
import { Navigation } from 'react-native-navigation';

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

    showSelectWard() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'RoundBook.SelectWard',
                navigatorStyle: {},
                navigatorButtons: {}
            }  
        });
    }

    showHome() {
        Navigation.startTabBasedApp({
            tabs: [
              {
                screen: 'RoundBook.Home',
                icon: require('../../assets/img/all_tasks.png'),
                iconInsets: { 
                    top: 6, 
                    bottom: -6
                  }
              },
              {
                screen: 'RoundBook.Profile',
                icon: require('../../assets/img/profile.png'),
                iconInsets: { 
                    top: 6,
                    bottom: -6
                }
              }
            ],
            tabsStyle: {
                tabBarButtonColor: '#1F1F1F',
                tabBarSelectedButtonColor: '#fa4000',
                tabBarBackgroundColor: '#FFFFFF'
            },
            appStyle: {
                tabBarButtonColor: '#1F1F1F',
                tabBarSelectedButtonColor: '#fa4000',
                tabBarTranslucent: false,
            },
            passProps: {},
            animationType: 'slide-down'
          });
    }

    componentDidMount() {        
        var unsubscriber = firebase.auth().onAuthStateChanged(user => {
            unsubscriber();
            this.setState({isLoading: false});
            if(user) {
                //this.showHome();
                this.showSelectWard()
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