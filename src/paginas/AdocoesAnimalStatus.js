import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RadioForm from 'react-native-simple-radio-button';

import { Formik } from 'formik';

import { atualizarAdocoesStatus } from '../servicos/Adocao';

import pata from "../assets/img/pata.png";

export default function AdocoesAnimalStatus({ route }) {

    const navigation = useNavigation();

    const { id_adocao, nome_animal, nome_instituicao, dataAdocao, status } = route.params?.adocoes;

    const [statusAlt, setStatusAlt] = useState(0);

    // Alterar status do animal
    async function alterarStatusAnimal() {
        try {
            const statusAlterado = {
                status: statusAlt,
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
        { label: 'Disponível para adoção', value: 0 },
        { label: 'Adotado', value: 1 }
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
                    onSubmit={alterarStatusAnimal()}
                >
                    {({ handleSubmit }) => (
                        <>
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

                            <View style={estilos.boxInputRadio}>
                                <View style={estilos.boxField}>
                                    <RadioForm
                                        radio_props={statusOptions}
                                        initial={status}
                                        formHorizontal={true}
                                        labelHorizontal={true}
                                        buttonColor={'#F58055'}
                                        labelStyle={{fontSize: 12, color: 'black', marginHorizontal: 3}}
                                        onPress={(value) => { setStatusAlt(value) }}
                                    />
                                </View>
                            </View>

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
                        </>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );
}

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
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF'
    },
    boxInputRadio: {
        width: 277,
        alignItems: 'center',
        height: 45,
        marginHorizontal: 36,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF'
    },
    boxField: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        padding: 10,
        backgroundColor: '#D3D3D3',
        color: 'black',
        borderRadius: 20,
        border: 'none'
    },
    imgTitulo: {
        width: 100,
        height: 100,
        marginHorizontal: 50,
        marginTop: 5,
    },
    boxDados: {
        width: "90%",
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