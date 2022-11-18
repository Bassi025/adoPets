import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import dog from "../assets/img/dog5.png";

const AnimalSearch = ({ animal }) => {
    
    return (
        <View style={style.card}>
            <View style={style.containerImage}>
                {animal.imagem ?
                    <Image source={{ uri: animal.imagem }} style={style.image} /> :
                    <Image source={dog} style={style.image} />
                }
            </View>
            <View style={style.info}>
                <Text style={style.textInfo}>Nome: {animal.nome}</Text>
                <Text style={style.textInfo}>Idade: {animal.idade}</Text>
                <Text style={style.textInfo}>Pelagem: {animal.pelagem}</Text>
                <Text style={style.textInfo}>Porte: {animal.porte}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textInfo: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    containerImage: {
        width: '100%',
        height: 200,
    },
    image: {
        marginHorizontal: 10,
        marginTop: 10,
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    info: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,

        // Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            heigth: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
});

export default AnimalSearch