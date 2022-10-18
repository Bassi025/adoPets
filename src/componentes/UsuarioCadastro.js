import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { adicionarUsuario } from '../servicos/Usuario';
import { useNavigation } from '@react-navigation/native';

export default function UsuarioCadastro(){
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');

    async function salvaUsuario(){
        const usuario = {
            nome: nome,
            endereco: endereco,
            cpf: cpf,
            dataNasc: dataNasc,
            telefone: telefone
        }
        await adicionarUsuario(usuario)
        //console.log(usuario)
    }

    function botao(){
        salvaUsuario();
        navigation.navigate("Usuario");
    } 

    return (<ScrollView style={estilos.Screen}>
        <View style = {estilos.boxPrincipal}>
            <Text style = {estilos.textTitulo}>TELA CADASTRO</Text>
            <Text style = {estilos.text}>Digite o seu nome:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <Text style = {estilos.text}>Digite o seu endereço:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setEndereco}
                    value={endereco}
                />
            </View>
            <Text style = {estilos.text}>Digite o seu cpf:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setCpf}
                    value={cpf}
                />
            </View>
            <Text style = {estilos.text}>Digite o sua data de nascimento:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setDataNasc}
                    value={dataNasc}
                />
            </View>
            <Text style = {estilos.text}>Digite o seu telefone:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setTelefone}
                    value={telefone}
                />
            </View>
            <TouchableOpacity style={estilos.botao} onPress={()=> botao()}>
                <Text style = {estilos.textButton}>CADASTRAR-SE</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>);
};

const estilos = StyleSheet.create({
    Screen:{
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
        backgroundColor:'white',
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
        backgroundColor:'#F58055',
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