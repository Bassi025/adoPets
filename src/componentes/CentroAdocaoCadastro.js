import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { adicionarInst } from '../servicos/Instituicao';

export default function CentroAdocaoCadastro(){
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cnpj, setCnpj] = useState('');

    async function salvaInst(){
        const inst = {
            nome: nome,
            cnpj: cnpj,
            endereco: endereco
        }
        await adicionarInst(inst)
        //console.log(inst)
    }

    function botao(){
        salvaInst();
        navigation.navigate("Instituicao");
    } 

    return (<View style={estilos.Screen}>
        <View style = {estilos.boxPrincipal}>
            <Text style = {estilos.textTitulo}>TELA CADASTRO</Text>
            <Text style = {estilos.text}>Digite o nome da instituição:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <Text style = {estilos.text}>Digite o endereço da instituição:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setEndereco}
                    value={endereco}
                />
            </View>
            <Text style = {estilos.text}>Digite o CNPJ da instituição:</Text>
            <View style = {estilos.boxInput}>
                <TextInput 
                    style={estilos.textImput}
                    onChangeText={setCnpj}
                    value={cnpj}
                />
            </View>
            <TouchableOpacity style={estilos.botao} onPress={()=> botao()}>
                <Text style = {estilos.textButton}>CADASTRAR-SE</Text>
            </TouchableOpacity>
        </View>
    </View>);
};

const estilos = StyleSheet.create({
    Screen:{
        flex: 1,
        backgroundColor: '#F58055'
    },
    textTitulo: {
        fontSize: 42,
        /* fontWeight: 'bold', */
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