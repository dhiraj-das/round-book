import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TextField, CircularButton } from '../components';
import { isValidEmail } from '../common/TextValidator';

export default class CreateAccountEmail extends Component {
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
            name: this.props.user.name,
            designation: this.props.user.designation,
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
        this.props.navigator.push({
            screen: 'RoundBook.CreateAccountPassword',
            passProps: {
                user: {
                    email: this.state.email,
                    name: this.state.name,
                    designation: this.state.designation
                }
            },
            animated: true
        });
    }
    
    render() {
        const { container, 
            title, 
            textfieldContainer,
            buttonContainer 
        } = styles;

        return(
            <ScrollView style={container}>
                <Text style={title}>And, your email?</Text>
                <View style={textfieldContainer}>
                    <TextField 
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        onChangeText={(email) => { 
                            const isValid = isValidEmail(email);
                            this.setState({ email, nextButtonEnabled: isValid });
                    }}
                    >EMAIL ADDRESS
                    </TextField>
                </View>
                <View style={buttonContainer}>
                    <CircularButton
                        onPress={this.state.nextButtonEnabled ? this.onNextButtonPress.bind(this) : undefined}
                        enabled={this.state.nextButtonEnabled}
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
    }
});