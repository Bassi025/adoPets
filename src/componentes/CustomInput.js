import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

const CustomInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    return (
        <>
            <View style={styles.boxInput}>
                <TextInput
                    style={[
                        hasError && styles.errorInput
                    ]}
                    value={value}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                />
                {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
            </View>
        </>
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
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 0,
    },
    errorText: {
        marginHorizontal: 10,
        marginVertical: 12.5,
        fontSize: 10,
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default CustomInput