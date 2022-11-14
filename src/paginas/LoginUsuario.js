import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../contexto/auth";

import { logarUsuario } from '../servicos/Usuario';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import FormikControl from "../componentes/FormikControl";

export default function UsuarioLogin() {

    const navigation = useNavigation();
    
    const { setUsuario } = React.useContext(AuthContext);
    
    // Efetuar o login do usuário
    async function logar(values) {
        const { login, senha } = values;
        try {
            const dadosUsuario = {
                nome: login,
                cpf: senha
            }
            const response = await logarUsuario(dadosUsuario)
            setUsuario(response);

            alert('Login efetuado com sucesso!');
            navigation.navigate("TelaUsuario");
        } catch (error) {
            alert('ERROR: ' + error)
        }
    }

    return (
        <View style={estilos.Screen}>
            <View style={estilos.boxPrincipal}>
                <Text style={estilos.textTitulo}>USUARIO</Text>
                <Formik
                    initialValues={{
                        login: '',
                        senha: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => logar(values)}
                >
                    {({ handleSubmit }) => (
                        <Form>
                            <Text style={estilos.text}>Digite o seu login:</Text>
                            <FormikControl
                                control='input'
                                type='text'
                                label=''
                                name='login'
                            />
                            <Text style={estilos.text}>Digite a sua senha:</Text>
                            <FormikControl
                                control='input'
                                type='password'
                                label=''
                                name='senha'
                            />

                            <TouchableOpacity
                                style={estilos.botao}
                                onPress={handleSubmit}
                            >
                                <Text style={estilos.textButtonLogin}>LOGIN</Text>
                            </TouchableOpacity>
                        </Form>
                    )}
                </Formik>

                <TouchableOpacity style={estilos.botaoCadastrar} onPress={() => navigation.navigate("UsuarioCadastro")}>
                    <Text style={estilos.textButton}>CADASTRAR-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const validationSchema = yup.object().shape({
    login: yup
        .string()
        .min(6, ({ min }) => `Login deve ter no minímo ${min} caracteres`)
        .required('O Login é obrigatório'),
    senha: yup
        .string()
        .matches(regexCpf, 'Senha inválida')
        .required('A Senha é obrigatória')
})

const estilos = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: '#F58055'
    },
    textTitulo: {
        fontSize: 60,
        fontFamily: 'CuteFont-Regular',
        marginHorizontal: 78,
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
        width: 150,
        height: 54,
        marginHorizontal: 90,
        marginTop: 40,
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F58055'
    },
    botaoCadastrar: {
        width: 250,
        height: 54,
        marginHorizontal: 42,
        marginTop: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: '#11E5BF'
    },
    textButtonLogin: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 46,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 60,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
})