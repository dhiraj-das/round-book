import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Image, 
    Button, 
    Alert 
} from 'react-native';
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
        this.state = {
            profileImage: ''
        }
    }

    uploadProfilePicture() {
        var options = {
            title: 'Upload Profile Picture',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if(response.error) {
                Alert.alert(
                    undefined,
                    "Something went wrong. Please try again later!",
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]
                )
                console.log('ImagePicker Error: ', response.error);
            } else {
            
            let source = { uri: response.uri };
              
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
            this.setState({profileImage: source});
            }
        });
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
                            source={this.state.profileImage}
                            style={profileImage}
                        />
                    </View>
                </View>
                <Button 
                    title='Click'
                    onPress={this.uploadProfilePicture.bind(this)}
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
        height: 60,
        width: 60,
        marginRight: 20,
        borderRadius: 30
    }
});