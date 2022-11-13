import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { adicionarUsuario } from '../servicos/Usuario';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import FormikControl from '../componentes/FormikControl';

export default function UsuarioCadastro() {
    const navigation = useNavigation();

    async function cadastrarUsuario(values) {
        const { nome, endereco, cpf, dataNasc, telefone } = values;

        try {
            const usuario = {
                nome: nome,
                endereco: endereco,
                cpf: cpf,
                dataNasc: dataNasc,
                telefone: telefone
            }

            const response = await adicionarUsuario(usuario)
            alert(response);
            // console.log(usuario)
            navigation.navigate("Usuario");
        } catch (error) {
            alert('ERROR: ' + error)
        }
    }

    return (
        <ScrollView style={estilos.Screen}>
            <View style={estilos.boxPrincipal}>
                <Text style={estilos.textTitulo}>TELA CADASTRO</Text>
                <Formik
                    initialValues={{
                        nome: '',
                        endereco: '',
                        cpf: '',
                        dataNasc: '',
                        telefone: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => cadastrarUsuario(values)}
                >
                    {({ handleSubmit }) => (
                        <Form>
                            <Text style={estilos.text}>Digite o seu nome:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='nome'
                            />
                            <Text style={estilos.text}>Digite o seu endereço:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='endereco'
                            />
                            <Text style={estilos.text}>Digite o seu CPF:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='cpf'
                            />
                            <Text style={estilos.text}>Digite a sua data de nascimento:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='dataNasc'
                            />
                            <Text style={estilos.text}>Digite o seu telefone:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='telefone'
                            />

                            <TouchableOpacity
                                style={estilos.botao}
                                onPress={handleSubmit}
                            >
                                <Text style={estilos.textButton}>CADASTRAR-SE</Text>
                            </TouchableOpacity>
                        </Form>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
};

const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const validationSchema = yup.object().shape({
    nome: yup
        .string()
        .min(6, ({ min }) => `Nome deve ter no minímo ${min} caracteres`)
        .required('O nome é obrigatório'),
    endereco: yup
        .string()
        .min(6, ({ min }) => `Endereço deve ter no minímo ${min} caracteres`)
        .max(100, ({ max }) => `Endereço deve ter no minímo ${max} caracteres`)
        .required('O endereço é obrigatório'),
    cpf: yup
        .string()
        .matches(regexCpf, 'CPF inválido')
        .required('O CPF é obrigatório'),
    dataNasc: yup
        .string()
        .min(10, ({ min }) => `Data de nacimento deve ter no minímo ${min} caracteres`)
        .required('A data de nascimento é obrigatória'),
    telefone: yup
        .string()
        .matches(/(\d){8}\b/, 'Digite um numero de telefone válido')
        .required('O Telefone é obrigatório'),
})

const estilos = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: '#F58055'
    },
    textTitulo: {
        fontSize: 42,
        fontFamily: 'CuteFont-Regular',
        marginHorizontal: 50,
        marginVertical: 20,
        color: '#F58055'
    },
    text: {
        marginHorizontal: 20,
        marginVertical: 8,
        fontSize: 20,
        lineHeight: 50,
        fontFamily: 'Cuprum-Bold',
        color: 'black'
    },
    boxInput: {
        width: 277,
        height: 45,
        marginHorizontal: 36,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF'
    },
    boxPrincipal: {
        height: "100%",
        backgroundColor: '#F6F6F6',
        marginVertical: 37,
        marginHorizontal: 20,
        borderRadius: 6,
        elevation: 4,
    },
    viewButton: {
        marginEnd: 20,
    },
    botao: {
        width: 250,
        height: 54,
        marginHorizontal: 45,
        marginTop: 50,
        backgroundColor: '#F58055',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: 'black'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 60,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
});