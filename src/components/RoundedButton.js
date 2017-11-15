import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class RoundedButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Some bla</Text>
            </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007e8c',
        height: 44,
        width: null,
        marginLeft: 30,
        marginRight: 30,
        borderColor: '#f7fbfb',
        borderRadius: 30,
        borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    text: {
        color: '#f7fbfb',
        alignSelf: 'center',
        fontFamily: 'CircularStd-Medium',
        fontSize: 20
    }
})