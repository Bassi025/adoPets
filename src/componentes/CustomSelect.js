import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { Field } from "formik";

const CustomSelect = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        options,
        form: { errors, touched, setFieldTouched, setFieldValue, values: { instituicao }},
        ...inputProps
    } = props

    console.log(props)

    const hasError = errors[name] && touched[name]

    const [teste, setTeste] = useState();

    return (
        <>
            <View style={styles.boxInput}>
                <Picker
                    style={[
                        hasError && styles.errorInput
                    ]}
                    selectedValue={value}
                    onValueChange={(itemValue, itemIndex) =>
                        // onChange(name)(itemValue)
                        onChange(name, itemValue)
                        // setFieldValue(name, itemValue)
                        // setTeste(itemValue)
                    }
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                >
                    {options.map(option => {
                        return (
                            <Picker.Item key={option.id} label={option.nome} value={option.id} />
                        )
                    })}
                </Picker>
                {/* <Field
                    name={name}
                    id={name}
                    as="select"
                    {...inputProps}
                >
                    {options.map(option => {
                        return (
                            <option key={option.id} value={option.id}>
                                {option.nome}
                            </option>
                        )
                    })}
                </Field> */}
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

export default CustomSelect