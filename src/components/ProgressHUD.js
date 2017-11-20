import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class ProgressHUD extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <View style={styles.container}
                opacity={this.props.isAnimating ? 1 : 0}
            >
                <View style={this.props.isBig ? styles.overlayLarge : styles.overlaySmall}>
                    <ActivityIndicator
                        color='black'
                        size={this.props.isBig ? 'large' : 'small'}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayLarge: {
        backgroundColor: 'white',
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 75,
        width: 75
    },
    overlaySmall: {
        backgroundColor: 'white',
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50,
        width: 50
    }
});

export { ProgressHUD };
