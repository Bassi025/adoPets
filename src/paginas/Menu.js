import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import pata from "../assets/img/pata.png";

export default function Menu() {
    const navigation = useNavigation();

    return (
        <View style={estilos.Screen}>
            <View style={estilos.boxPrincipal}>
                <Text style={estilos.textTitulo}>ADOPETS</Text>
                <TouchableOpacity style={estilos.botaoCliente} onPress={() => navigation.navigate("Usuario")}>
                    <Text style={estilos.textButton}>CLIENTE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoInstuicao} onPress={() => navigation.navigate("Instituicao")}>
                    <Text style={estilos.textButtonIntituicao}>INSTITUIÇÃO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("TelaLoading")}>
                    <Image source={pata} style={estilos.imagen} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: '#F58055'
    },
    textTitulo: {
        fontSize: 75,
        fontFamily: 'CuteFont-Regular',
        marginHorizontal: 54,
        marginVertical: 20,
        color: '#F58055'
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
    botaoCliente: {
        width: 250,
        height: 54,
        marginHorizontal: 44,
        marginTop: 35,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: '#11E5BF'
    },
    botaoInstuicao: {
        width: 250,
        height: 54,
        marginHorizontal: 44,
        marginTop: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: '#11E5BF'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 90,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
    textButtonIntituicao: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 74,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    },
    imagen: {
        width: 210,
        height: 210,
        marginTop: 30,
        marginEnd: 5,
        marginHorizontal: 64
    }
})