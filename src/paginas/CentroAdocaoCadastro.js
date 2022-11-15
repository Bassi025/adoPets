import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { adicionarInstituicao } from '../servicos/Instituicao';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import FormikControl from '../componentes/FormikControl';

export default function CentroAdocaoCadastro() {
    
    const navigation = useNavigation();

    // Efetuar cadastro da instituição
    async function cadastrarInstituicao(values, resetForm) {
        const { nome, endereco, cnpj } = values;

        try {
            const instituicao = {
                nome: nome,
                endereco: endereco,
                cnpj: cnpj
            }

            const response = await adicionarInstituicao(instituicao);
            alert(response);

            resetForm({ values: '' })

            navigation.navigate("Instituicao");
        } catch (error) {
            alert('ERROR: ' + error)
        }
    }

    return (
        <View style={estilos.Screen}>
            <View style={estilos.boxPrincipal}>
                <Text style={estilos.textTitulo}>TELA CADASTRO</Text>
                <Formik
                    initialValues={{
                        nome: '',
                        endereco: '',
                        cnpj: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => cadastrarInstituicao(values, resetForm)}
                >
                    {({ handleSubmit }) => (
                        <Form>
                            <Text style={estilos.text}>Digite o nome da instituição:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='nome'
                            />
                            <Text style={estilos.text}>Digite o endereço da instituição:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='endereco'
                            />
                            <Text style={estilos.text}>Digite o CNPJ da instituição:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='cnpj'
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
        </View>
    );
};

const regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;

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
    cnpj: yup
        .string()
        .matches(regexCnpj, 'CNPJ inválido')
        .required('O CNPJ é obrigatório')
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
        width: '90%',
        height: '90%',
        backgroundColor: '#F6F6F6',
        marginVertical: 37,
        marginHorizontal: 20,
        borderRadius: 6,
        elevation: 4,
    },
    botao: {
        width: 250,
        height: 54,
        marginHorizontal: 40,
        marginTop: 60,
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F58055'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 60,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
});