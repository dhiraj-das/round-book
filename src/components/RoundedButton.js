import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableOpacity } from 'react-native';

export default class RoundedButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                <Image source={require('../../assets/img/google.png')} style={styles.image}/>
                <Text style={styles.text}>Some bla</Text>
                </View>
            </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007e8c',
        height: 50,
        width: null,
        borderColor: '#f7fbfb',
        borderRadius: 30,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#f7fbfb',
        textAlign: 'center',
        fontFamily: 'CircularStd-Medium',
        fontSize: 20,
        marginRight: 30,
        marginLeft: 10
    },
    image: {
        marginLeft: 30,
        height: 20,
        width: 20
    }
})