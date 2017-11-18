import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField, CircularButton } from '../components';
import { isValidEmail } from '../common/TextValidator';

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
        console.log(this.state.email);
        console.log(this.state.password);
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
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        onChangeText={(email) => { 
                            this.setState({email})
                            const isValid = isValidEmail(email) && this.state.password.length > 6;
                            this.setState({ nextButtonEnabled: isValid });
                        }}
                    >EMAIL ADDRESS
                    </TextField>
                    <TextField 
                        onChangeText={(password) => {
                            this.setState({password})
                            const isValid = isValidEmail(this.state.email) && password.length > 6;
                            this.setState({ nextButtonEnabled: isValid });
                        }}
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        marginRight: 30,
        marginTop: 20
    }
});