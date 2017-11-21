import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { signOut } from '../managers/AuthManager';
import ImagePicker from 'react-native-image-picker';

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
                    onPress={() => {
                        var options = {
                            title: 'Select Avatar',
                            customButtons: [
                              {name: 'fb', title: 'Choose Photo from Facebook'},
                            ],
                            storageOptions: {
                              skipBackup: true,
                              path: 'images'
                            }
                          };
                          ImagePicker.showImagePicker(options, (response) => {
                            console.log('Response = ', response);
                          
                            if (response.didCancel) {
                              console.log('User cancelled image picker');
                            }
                            else if (response.error) {
                              console.log('ImagePicker Error: ', response.error);
                            }
                            else if (response.customButton) {
                              console.log('User tapped custom button: ', response.customButton);
                            }
                            else {
                              let source = { uri: response.uri };
                          
                              // You can also display the image using data:
                              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                          
                              this.setState({
                                avatarSource: source
                              });
                            }
                          });
                    }}
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