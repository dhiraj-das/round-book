import React, { Component } from 'react';
import { TextField, CircularButton, ProgressHUD } from '../components';
import { isValidEmail } from '../common/TextValidator';
import { signInUser, currentUser } from '../managers/AuthManager';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Alert 
} from 'react-native';

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
            nextButtonEnabled: true,
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
        signInUser(this.state.email, this.state.password, (user, error) => {
            this.setState({isLoading: false});
            if(error) {
                console.log(error);
                Alert.alert(
                    'Bummer!',
                    "Couldn't log you in. Please try again!",
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
                return;
            }
            this.props.navigator.resetTo({
                screen: 'RoundBook.Home',
                animated: true,
                backButtonHidden: true
              });
        });
    }
    
    render() {
        const { container, 
            title,
            textfield, 
            loginContainer,
            button 
        } = styles;

        return(
            <ScrollView style={container}>
                <ProgressHUD isAnimating={this.state.isLoading}/>
                <Text style={title}>Log In</Text>
                <View style={loginContainer}>
                    <TextField 
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        onChangeText={(email) => { 
                            const isValid = isValidEmail(email) && this.state.password.length > 5;
                            this.setState({ email, nextButtonEnabled: isValid });
                        }}
                    >EMAIL ADDRESS
                    </TextField>
                    <TextField 
                        onChangeText={(password) => {
                            const isValid = isValidEmail(this.state.email) && password.length > 5;
                            this.setState({ password, nextButtonEnabled: isValid });
                        }}
                        autoCorrect={false}
                        secureTextEntry
                    >PASSWORD
                    </TextField>
                </View>
                <View style={styles.buttonContainer}>
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