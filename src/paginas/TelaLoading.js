import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import dog from '../assets/img/dog4.jpg';

export default function TelaLoading(){
    const navigation = useNavigation();
    return (
        <View style={estilos.Screen}>
            <Text style={estilos.textTitulo}>ADOPETS</Text>
            <Text style={estilos.textLoading}>CARREGANDO...</Text>
            <Image style={estilos.imagen} source={dog}/>
        </View>
    );
}

const estilos = StyleSheet.create({
    Screen:{
        flex: 1,
        backgroundColor: 'white',
        
    },
    textTitulo: {
        fontSize: 80,
        fontFamily: 'CuteFont-Regular',
        marginHorizontal: 64,
        marginTop: 20,
        color: '#F58055'
    },
    textLoading: {
        marginTop: 120,
        marginHorizontal: 90,
        fontSize: 28,
        fontFamily: "Cuprum-Bold",
    },
    imagen: {
        width: 210,
        height: 210,
        marginTop: 100,
        marginEnd: 5,
        marginHorizontal: 74
    }
})