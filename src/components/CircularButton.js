import React, { Component } from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Image 
} from 'react-native';

class CircularButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity 
                style={this.props.enabled ? styles.containerActive : styles.containerDisabled}
                onPress={this.props.onPress}
            >
                <Image
                    source={require('../../assets/img/chevron.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerDisabled: {
        backgroundColor: '#006e7a',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    containerActive: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    image: {
        height: 20,
        aspectRatio: 0.63,
        tintColor: '#007e8c'
    }
});

export { CircularButton };