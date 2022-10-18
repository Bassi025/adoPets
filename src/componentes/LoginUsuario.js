import React, {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet, TextInput, Alert} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { buscaUsuario, usuario } from "../servicos/Usuario";

export default function UsuarioLogin(){
    
    const navigation = useNavigation();

    const [loginUsuario, setLoginUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const [usuario, setUsuario] = useState([]);

    // Busca, salva e mostra
    async function mostraUsuario(){
        const user = await buscaUsuario()
        setUsuario(user)
        // console.log(user)
    }

    // Executa a função anterior
    function login(){
        mostraUsuario();
        //navigation.navigate("TelaUsuario");
    }

    return(
        <View style = {estilos.Screen}>
            <View style = {estilos.boxPrincipal}>
                <Text style = {estilos.textTitulo}>USUARIO</Text>
                <Text style = {estilos.text}>Digite o seu login:</Text>
                <View style = {estilos.boxInput}>
                    <TextInput 
                        style={estilos.textImput}
                        onChangeText={setLoginUsuario}
                        value={loginUsuario}
                    />
                </View>
                <Text style = {estilos.text}>Digite a sua senha:</Text>
                <View style = {estilos.boxInput}>
                    <TextInput 
                        style={estilos.textImput}
                        onChangeText={setSenhaUsuario}
                        value={senhaUsuario}
                    />
                </View>
                
                <TouchableOpacity style={estilos.botao} onPress={()=> login()}>
                    <Text style = {estilos.textButtonLogin}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoCadastrar} onPress={()=> navigation.navigate("UsuarioCadastro")}>
                    <Text style = {estilos.textButton}>CADASTRAR-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    Screen:{
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
    boxInput: {
        width: 277,
        height: 45,
        marginHorizontal: 36,
        backgroundColor:'white',
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
        backgroundColor:'white',
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