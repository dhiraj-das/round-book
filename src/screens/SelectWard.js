import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextField } from '../components';

export default class SelectWard extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: 'white',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    constructor(props) {
        super(props);
    }

    createNewWard() {

    }

    joinWard() {
        this.props.navigator.showModal({
            screen: "RoundBook.JoinWard",
            backButtonHidden: true
          });
    }
    
    render() {
        const { container, 
            image,
            hint,
            button,
            buttonText,
            buttonContainer
        } = styles;

        return(
            <View style={container}>
                <View>
                    <Image source={require('../../assets/img/ward.png')} style={image} />
                    <Text style={hint}>Get started by joining a ward {"\n"}or create your own.</Text>
                </View>
                <View style={buttonContainer}>
                    <TouchableOpacity style={button} onPressOut={this.joinWard.bind(this)}>
                        <Text style={buttonText}>
                            Join Ward
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[button, {marginTop: 15}]} onPressOut={this.createNewWard.bind(this)}>
                        <Text style={buttonText}>
                            Create new ward
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    image: {
        marginTop: 50,
        height: 100,
        opacity: 0.15,
        width: 100,
        alignSelf: 'center'
    },
    hint: {
        paddingTop: 10,
        color: '#C0C0C0',
        fontFamily: 'CircularStd-Medium',
        fontSize: 15,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    },
    button: {
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 13,
        paddingBottom: 13,
        borderRadius: 5,
        backgroundColor: '#008080'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'CircularStd-Medium',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});