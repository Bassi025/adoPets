import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import lupa from "../assets/img/lupa.jpg";
import pata from "../assets/img/pata.png";
import dog from "../assets/img/dog5.png";

import { useNavigation } from '@react-navigation/native';

export default function TelaUsuario(){

    const navigation = useNavigation();
 
    return(
    <View style = {estilos.boxPrincipal}>  
        <View style={estilos.boxTitulo}>
            <View style = {estilos.titulo}>
                <Text style={estilos.textTitulo}>ADOPETS</Text>
                <Image source={pata} style = {estilos.imgTitulo}/>
            </View>
            <Text style={estilos.textInst}>USUARIO:</Text>
        </View>
        <Text style = {estilos.textOpcao}>SELECIONE UMA OPÇÃO:</Text>
        <View style = {estilos.boxButton}>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate("BuscarAnimais_Usuario")}>
                <Text style = {estilos.textBotao1}>
                    BUSCAR ANIMAIS
                </Text>
                <Image source={lupa} style = {estilos.img}/>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate("BuscarInstituicao")}>
                <Text style = {estilos.textBotao3}>
                    BUSCAR INSTITUIÇÃO
                </Text>
                <Image source={lupa} style = {estilos.img}/>
             </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("TelaLogout")}>
            <Text style = {estilos.textLogout}>SAIR DO PERFIL</Text>
        </TouchableOpacity>
    </View>)
}

const estilos = StyleSheet.create({
    boxPrincipal: {
        width: "100%",
        height: "100%"
    },
    titulo: {
        flexDirection: "row",
    },
    boxTitulo: {
        height: "26%",
        backgroundColor: "#F58055",
    },
    textTitulo: {
        fontFamily: "CuteFont-Regular",
        fontSize: 60,
        marginTop: 5,
        marginHorizontal: 5,
    },
    textInst: {
        fontSize: 20,
        fontFamily: "Cuprum-Bold",
        marginTop: 5,
        marginHorizontal: 5,
        
    },
    textOpcao: {
        fontSize: 20,
        fontFamily: "Cuprum-Bold",
        marginTop: 20,
        marginHorizontal: 15,
        
    },
    textLogout: {
        fontFamily: "Cuprum-Bold",
        fontSize: 20,
        marginHorizontal: 110,
        marginVertical: 80,
        color: "blue"
    },
    boxButton: {
        flexDirection: "row",
        marginHorizontal: 10,
    },
    botao:{
        width: 150,
        height: 115,
        backgroundColor:'white',
        marginTop: 100,
        marginHorizontal: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF'  
    },
    textBotao1: {
        marginTop: 5,
        marginHorizontal: 24,
        fontFamily: "Cuprum-Bold"
    },
    textBotao3: {
        marginTop: 5,
        marginHorizontal: 15,
        fontFamily: "Cuprum-Bold"
    },
    img: {
        width: 60,
        height: 40,
        marginTop: 15,
        marginHorizontal: 42
    },
    imgTitulo: {
        width: 100,
        height: 100,
        marginHorizontal: 50,
        marginTop: 5,
    },

});