import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class TextField extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.children}</Text>
                <TextInput 
                    style={styles.textInput}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#b9fbfb',
        paddingTop: 5,
        paddingBottom: 5,
        height: 60
    },
    label: {
        fontFamily: 'CircularStd-Medium',
        fontSize: 10,
        color: '#f7fbfb',
        flex: 1,

    },
    textInput: {
        width: null,
        fontFamily: 'CircularStd-Medium',
        fontSize: 25,
        lineHeight: 40,
        color: '#f7fbfb'
    }
});

export { TextField };