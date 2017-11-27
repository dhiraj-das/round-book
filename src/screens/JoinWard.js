import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { CircularButton, ProgressHUD } from '../components';
import { doesWardExist } from '../managers/DatabaseManager';
import { showHome } from '../common/ScreenRouter';
import { 
    Alert, 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image 
} from 'react-native';

export default class JoinWard extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: 'white',
        navBarNoBorder: true,
        topBarElevationShadowEnabled: false
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            nextButtonEnabled: false,
            wardId: ''
        };
    }

    onNextButtonPress() {
        this.setState({isLoading: true});
        doesWardExist(this.state.wardId, (exists) => {
            this.setState({isLoading: false});
            if(exists) {
                this.props.navigator.dismissModal().then(() => showHome());
            } else {
                Alert.alert(
                    '',
                    "Sorry! Could not find a ward associated with that ID. \nPlease check and try again.",
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ]
                )
            }
        });
    }

    onScaningCompleted() {
        onNextButtonPress();
    }

    onDismissPressed() {
        this.props.navigator.dismissModal();
    }
    
    render() {
        const { container,
            hint,
            button,
            buttonText,
            buttonContainer,
            textInputContainer,
            textInput
        } = styles;

        return(
            <View style={container}>
                <Text style={hint}>Enter Ward-ID or Scan QR code</Text>
                <View style={textInputContainer}>
                    <TextInput 
                        style={textInput}
                        onChangeText={(wardId) => {
                            const isValid = wardId.length > 0;
                            this.setState({ wardId, nextButtonEnabled: isValid });
                        }}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity 
                        style={this.state.nextButtonEnabled ? styles.circularButtonContainerActive : styles.circularButtonContainerDisabled}
                        onPress={this.state.nextButtonEnabled && !this.state.isLoading ? this.onNextButtonPress.bind(this) : undefined}
                    >
                        <ProgressHUD isAnimating={this.state.isLoading}/>
                        <Image
                            source={require('../../assets/img/chevron.png')}
                            style={styles.image}
                            opacity={this.state.isLoading ? 0:1}
                        />
                    </TouchableOpacity>
                </View>
                <QRCodeScanner
                 onRead={this.onScaningCompleted.bind(this)}
                 reactivate
                 showMarker
                />
                <TouchableOpacity 
                    style={button} 
                    onPressOut={this.onDismissPressed.bind(this)}>
                        <Text style={buttonText}>
                            Cancel
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    hint: {
        paddingTop: 10,
        color: 'black',
        fontFamily: 'CircularStd-Medium',
        fontSize: 17,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    },
    button: {
        height: 44,
        justifyContent: 'center',
        backgroundColor: '#006e7a'
    },
    buttonText: {
        color: 'white',
        fontFamily: 'CircularStd-Medium',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInput: {
        flex: 1,
        fontFamily: 'CircularStd-Medium',
        fontSize: 20,
        color: 'black',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        paddingLeft: 5,
        marginRight: 10
    },
    textInputContainer: {
        margin: 10,
        flexDirection: 'row'
    },
    circularButtonContainerDisabled: {
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    circularButtonContainerActive: {
        backgroundColor: '#006e7a',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    image: {
        height: 20,
        aspectRatio: 0.63,
        tintColor: '#EAEAEA'
    }
});