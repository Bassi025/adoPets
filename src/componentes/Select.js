import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

function Select(props) {
  const { label, name, options, ...rest } = props
  
  return (
    <View style={styles.boxInput}>
      <label htmlFor={name}>{label}</label>
      <Field style={styles.textInput} as='select' id={name} name={name} {...rest}>
        <option defaultValue={true}>
          Selecione a Instituicao..
        </option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.nome}
            </option>
          )
        })}
      </Field>
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
  }
})

export default Select;