import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField, CircularButton } from '../components';

export default class SignIn extends Component {
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
            email: '',
            password: '',
            nextButtonEnabled: false
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
        console.log('nxt pressed');
    }

    onTextChange(key, value) {
        if(key === 'email') {
            this.setState({email: value});
        } else {
            this.setState({password: value})
        }
        this.validateFields();
    }

    validateFields() {
        const regex = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(this.state.email) === true && this.state.password.length > 5) {
            this.setState({ nextButtonEnabled: true});
            return;
        }
        this.setState({ nextButtonEnabled: false});
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
                <Text style={title}>Log In</Text>
                <View style={loginContainer}>
                    <TextField 
                        value={this.state.email}
                        onChangeText={(email) => this.onTextChange('email', email)}
                        autoCorrect={false}
                    >EMAIL ADDRESS
                    </TextField>
                    <TextField 
                        value={this.state.password}
                        onChangeText={(password) => this.onTextChange('password', password)}
                        autoCorrect={false}
                        secureTextEntry
                    >PASSWORD
                    </TextField>
                </View>
                <View style={styles.buttonContainer}>
                    <CircularButton
                        onPress={this.state.nextButtonEnabled ? this.onNextButtonPress.bind(this) : undefined}
                        enabled={this.state.nextButtonEnabled}
                    />
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
        paddingTop: 30,
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginContainer: {
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40
    },
    buttonContainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        marginRight: 30,
        marginTop: 20
    }
});