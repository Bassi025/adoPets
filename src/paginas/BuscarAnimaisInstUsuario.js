import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';

import { filtrarAnimaisDisponiveisInst } from '../servicos/Animais';

import AnimalSearch from '../componentes/AnimalSearch';

import pata from "../assets/img/pata.png";

export default function BuscarAnimaisInstUsuario({ route }) {

    const { id } = route.params?.instituicao;

    const [animais, setAnimais] = useState([{}]);

    // Buscar animais da instituição
    async function mostrarAnimais() {
        try {
            const response = await filtrarAnimaisDisponiveisInst(id);
            console.log(response)
            setAnimais(response);
        } catch (error) {
            alert("Error to request database.");
            console.log(error);
        }
    }

    useEffect(() => {
        mostrarAnimais();
    }, [])

    let listItemView = (item) => {
        return (
            <View>
                {JSON.stringify(item) !== "{}" ?
                    <AnimalSearch animal={item} /> :
                    <View>
                        <Text style={estilos.nome}>Não há animais cadastrados nesta instituição.</Text>
                    </View>
                }
            </View>
        );
    };

    return (
        <View style={estilos.Screen}>
            <ScrollView style={estilos.boxPrincipal}>
                <View style={estilos.boxTitulo}>
                    <View style={estilos.titulo}>
                        <Text style={estilos.textTitulo}>ADOPETS</Text>
                        <Image source={pata} style={estilos.imgTitulo} />
                    </View>
                </View>
                <View style={estilos.boxDados}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={animais}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => listItemView(item)}
                    />
                </View>
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
    textTitulo: {
        fontFamily: "CuteFont-Regular",
        fontSize: 60,
        marginTop: 5,
        marginHorizontal: 5,
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
    }
});