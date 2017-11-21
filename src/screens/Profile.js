import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { signOut } from '../managers/AuthManager';

export default class Profile extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: 'white',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { 
            scrollview, 
            name, 
            designation,
            profileContainer,
            profileImage 
        } = styles;

        return(
            <ScrollView style={scrollview}>
                <View style={profileContainer}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={name}>Dhiraj Das</Text>
                        <Text style={designation}>Associate Engineer</Text>
                    </View>
                    <View>
                        <Image 
                            source={require('../../assets/img/google.png')}
                            style={profileImage}
                        />
                    </View>
                </View>
                <Button 
                    onPress={() => console.log('pressed')}
                    title='Click'
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    name: {
        color: 'black',
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 20
    },
    designation: {
        color: 'black',
        paddingLeft: 20,
        fontFamily: 'CircularStd-Medium',
        fontSize: 14
    },
    profileImage: {
        height: 50,
        width: 50,
        marginRight: 20,
        borderRadius: 25
    }
});