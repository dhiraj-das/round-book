import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TextField, CircularButton, ProgressHUD } from '../components';
import { createUser } from '../managers/AuthManager';

export default class CreateAccountPassword extends Component {
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
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.state = { 
            password: '',
            email: this.props.user.email,
            name: this.props.user.name,
            designation: this.props.user.designation,
            nextButtonEnabled: false,
            isLoading: false 
        };
      }

    onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
          if (event.id == 'back-button') {
             this.props.navigator.pop({animated: true});
          }
        }
    }

    onNextButtonPress() {
        this.setState({isLoading: true});
        const { name, password, email, designation } = this.state;
        createUser(email, password, (user, error) => {
            if(user) {
                user.updateProfile({
                    displayName: name, 
                    photoUrl: null
                }).then(() => {
                    this.setState({isLoading: false});
                    this.showSelectWard();
                }).catch((error) => {
                    this.setState({isLoading: false});
                    console.log(error);
                });
            } else {
                console.log(error);
                this.setState({isLoading: false});
            }
        });
    }

    showSelectWard() {
        this.props.navigator.resetTo({
            screen: 'RoundBook.SelectWard',
            passProps: {},
            animated: true,
            backButtonHidden: true
        });
    }
    
    render() {
        const { container, 
            title, 
            textfieldContainer,
            buttonContainer,
            passwordHintStyle 
        } = styles;

        return(
            <ScrollView style={container}>
                <Text style={title}>Create a password</Text>
                <ProgressHUD isAnimating={this.state.isLoading}/>
                <View style={textfieldContainer}>
                    <TextField 
                        onChangeText={(password) => {
                        const isValid = password.length > 5;
                        this.setState({ password, nextButtonEnabled: isValid });
                    }}
                        autoCorrect={false}
                        secureTextEntry
                    >PASSWORD
                    </TextField>
                </View>
                <Text style={passwordHintStyle}>Your password must be 6 or more characters long.</Text>
                <View style={buttonContainer}>
                    <CircularButton
                        onPress={this.state.nextButtonEnabled ? this.onNextButtonPress.bind(this) : undefined}
                        enabled={this.state.nextButtonEnabled && !this.state.isLoading }
                    />
                </View>
            </ScrollView>
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
        paddingTop: 30,
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textfieldContainer: {
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        marginRight: 30,
        marginTop: 20
    },
    passwordHintStyle: {
        color: '#f7fbfb',
        paddingTop: 2,
        paddingLeft: 30,
        fontFamily: 'CircularStd-Medium',
        fontSize: 10
    }
});