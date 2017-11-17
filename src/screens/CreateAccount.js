import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextField } from '../components';

export default class SecondScreen extends Component {
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
        this.state = { fullName: '' };
      }

      onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
          if (event.id == 'back-button') {
             this.props.navigator.pop({animated: true});
          }
        }
      }
    
    render() {
        const { container, 
            title, 
            loginContainer,
            button 
        } = styles;

        console.log(this.state.fullName);

        return(
            <View style={container}>
                <Text style={title}>What's your name?</Text>
                <View style={loginContainer}>
                    <TextField 
                        text={this.state.fullName}
                        onChange={fullName => this.setState({ fullName })}
                        autoCorrect={false}
                    >FULL NAME
                    </TextField>
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
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40
    }
});