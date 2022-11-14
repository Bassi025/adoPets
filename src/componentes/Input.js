import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

function Input(props) {
    const { label, name, ...rest } = props
    
    return (
        <View style={styles.boxInput}>
            <label htmlFor={name}>{label}</label>
            <Field style={styles.textInput} id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </View>
    )
}

const styles = StyleSheet.create({
    boxInput: {
        width: 277,
        height: 45,
        marginHorizontal: 36,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF'
    },
    textInput: {
        height: 40,
        width: StyleSheet.inherit,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        border: 'none'
    }
})

export default Input