import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Formik, Field } from 'formik';
import * as yup from 'yup';

import CustomInput from './CustomInput';

const options = [
  { value: 'developer', label: 'Software Developer' },
  { value: 'chef', label: 'Chef' },
  { value: 'enginner', label: 'Enginner' },
  { value: 'painter', label: 'Painter' }
]

export default function FormTest() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text>Sign Up Screen</Text>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
              instituicoes: ''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={signUpValidationSchema}
          >
            {({ handleSubmit, isValid, values, setFieldValue, errors, setValues }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  placeholder="Full Name"
                />
                <Field
                  component={CustomInput}
                  name="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                />
                <Field
                  component={CustomInput}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                
                <Button
                  onPress={handleSubmit}
                  title="SIGN UP"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  )
}

const regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Digite pelo menos 2 nomes')
    .min(10, ({ min }) => `O nome deve ter no minímo ${min} caracteres`)
    .required('O Nome completo é obrigatório'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Digite um numero de telefone válido')
    .required('O Telefone é obrigatório'),
  email: yup
    .string()
    .email("Digite um email válido")
    .required('O Email é obrigatório'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "A senha deve conter letras minusculas")
    .matches(/\w*[A-Z]\w*/, "A senha deve contaer letras maiusculas")
    .matches(/\d/, "A senha deve ter um número")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "A senha deve ter caracteres especiais")
    .min(8, ({ min }) => `A senha deve ter no minímo ${min} caracteres`)
    .required('A Senha é obrigatória')
})

const styles = StyleSheet.create({
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})