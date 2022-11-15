import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

function RadioButtons(props) {
    
    const { label, name, options, ...rest } = props

    return (
        <View style={styles.boxInput}>
            <View style={styles.boxField}>
                <label>{label}</label>
                <Field style={styles.textInput} name={name} >
                    {({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.status}>
                                    <input
                                        type='radio'
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.status}</label>
                                </React.Fragment>
                            )
                        })
                    }}
                </Field>
            </View>
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
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    boxField: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default RadioButtons