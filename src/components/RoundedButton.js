import React, { Component } from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableOpacity } from 'react-native';

class RoundedButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity onPressOut={this.props.onPressOut}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.children}</Text>
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
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: '#f7fbfb',
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        fontFamily: 'CircularStd-Medium',
        fontSize: 20
    }
});

export { RoundedButton };