import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { atualizarAdocoesStatus } from '../servicos/Adocao';

import FormikControl from '../componentes/FormikControl';

import pata from "../assets/img/pata.png";

export default function AdocoesAnimalStatus({ route }) {
    
    const navigation = useNavigation();

    const { id_adocao, nome_animal, nome_instituicao, dataAdocao } = route.params?.adocoes;

    // Alterar status do animal
    async function alterarStatusAnimal(values) {
        const { status } = values;

        try {
            const statusAlterado = {
                status: parseInt(status),
                id: id_adocao
            }
            const response = await atualizarAdocoesStatus(statusAlterado);
            alert(response)

            navigation.navigate("SituacaoAnimais");
        } catch (error) {
            alert("Erro: Não foi possível alterar o status do animal");
            console.log(error);
        }
    }

    const statusOptions = [
        { status: 'Disponível para adoção', value: 0 },
        { status: 'Adotado', value: 1 }
    ]

    return (
        <View style={estilos.Screen}>
            <ScrollView style={estilos.boxPrincipal}>
                <View style={estilos.boxTitulo}>
                    <View style={estilos.titulo}>
                        <Text style={estilos.textTitulo}>ALTERAR STATUS</Text>
                        <Image source={pata} style={estilos.imgTitulo} />
                    </View>
                </View>
                <Formik
                    initialValues={{
                        status: undefined
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => alterarStatusAnimal(values)}
                >
                    {({ handleSubmit }) => (
                        <Form>
                            <Text style={estilos.text}>Nome do animal:</Text>
                            <View style={estilos.boxInput}>
                                <TextInput
                                    style={estilos.textInput}
                                    value={nome_animal}
                                    editable={false}
                                />
                            </View>

                            <Text style={estilos.text}>Nome da instituição:</Text>
                            <View style={estilos.boxInput}>
                                <TextInput
                                    style={estilos.textInput}
                                    value={nome_instituicao}
                                    editable={false}
                                />
                            </View>

                            <Text style={estilos.text}>Status:</Text>
                            <FormikControl
                                control='radio'
                                label=''
                                name='status'
                                options={statusOptions}
                            />

                            <Text style={estilos.text}>Data Adoção:</Text>
                            <View style={estilos.boxInput}>
                                <TextInput
                                    style={estilos.textInput}
                                    value={dataAdocao}
                                    editable={false}
                                />
                            </View>

                            <TouchableOpacity
                                style={estilos.botao}
                                onPress={handleSubmit}
                            >
                                <Text style={estilos.textButton}>EDITAR</Text>
                            </TouchableOpacity>
                        </Form>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );
}

const validationSchema = yup.object().shape({
    status: yup
        .number()
        .required('O status é obrigatório')
})

const estilos = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#F58055"
    },
    boxPrincipal: {
        width: "90%",
        height: "90%",
        backgroundColor: "#F6F6F6",
        marginVertical: 37,
        marginHorizontal: 20,
        borderRadius: 6,
        elevation: 4
    },
    boxTitulo: {
        // height: "26%",
        backgroundColor: "#F58055",
    },
    titulo: {
        flexDirection: "row",
    },
    text: {
        marginHorizontal: 20,
        marginVertical: 8,
        fontSize: 20,
        lineHeight: 50,
        fontFamily: 'Cuprum-Bold',
        color: 'black'
    },
    textTitulo: {
        fontFamily: "CuteFont-Regular",
        fontSize: 60,
        marginTop: 5,
        marginHorizontal: 5,
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
    textInput: {
        height: 40,
        width: StyleSheet.inherit,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        border: 'none',
        // borderColor: 'gray',
        // borderWidth: StyleSheet.hairlineWidth,
    },
    imgTitulo: {
        width: 100,
        height: 100,
        marginHorizontal: 50,
        marginTop: 5,
    },
    boxDados: {
        width: "90%",
        // height: "50%",
        backgroundColor: "#E8DFDD",
        marginHorizontal: 15,
        marginVertical: 40,
        borderRadius: 10
    },
    botao: {
        width: 185,
        height: 54,
        marginHorizontal: 42,
        marginTop: 80,
        backgroundColor: '#F58055',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: '#000000'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 60,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
});