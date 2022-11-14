import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../contexto/auth";

import pata from "../assets/img/pata.png"

export default function TelaLogout() {
    const navigation = useNavigation();

    const { usuario, setUsuario, setInstituicao } = React.useContext(AuthContext);

    return (
        <View style={estilos.boxPrincipal}>
            <Text style={estilos.textTitulo}>GOSTARIA DE SAIR?</Text>
            <TouchableOpacity style={estilos.botao} onPress={() => {
                setUsuario('')
                setInstituicao('')
                navigation.navigate("Menu")
            }}>
                <Text style={estilos.textButton}>SIM</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao} onPress={() => {
                if (usuario?.nome !== undefined)
                    navigation.navigate("TelaUsuario")
                else
                    navigation.navigate("TelaInstituicao")
            }}>
                <Text style={estilos.textButton}>NAO</Text>
            </TouchableOpacity>

            <Image source={pata} style={estilos.imagem} />
        </View>
    );
}

const estilos = StyleSheet.create({
    textTitulo: {
        fontSize: 50,
        fontFamily: 'CuteFont-Regular',
        marginVertical: 20,
        color: '#F58055'
    },
    boxPrincipal: {
        width: '100%',
        height: '100%',
        color: 'white',
        marginVertical: 37,
        marginHorizontal: 20,
        borderRadius: 6,

    },
    botao: {
        width: 150,
        height: 54,
        marginHorizontal: 82,
        marginTop: 40,
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#F58055'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 54,
        fontFamily: 'Cuprum-Bold',
    },
    imagem: {
        width: 200,
        height: 200,
        marginTop: 40,
        marginEnd: 5,
        marginHorizontal: 58
    }
})