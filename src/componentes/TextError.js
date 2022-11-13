import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TextError(props) {
    return <Text style={styles.errorText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 10,
        color: 'red',
    }
})

export default TextError