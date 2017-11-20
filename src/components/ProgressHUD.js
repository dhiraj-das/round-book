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
                <View style={styles.overlay}>
                    <ActivityIndicator
                        color='black'
                        size='small'
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
    overlay: {
        backgroundColor: 'white',
        opacity: 0.7,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
});

export { ProgressHUD };
