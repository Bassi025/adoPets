import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const AnimalSearch = ({ animal }) => {
    return (
        <View>
            <View style={style.containerImage}>
                {animal.imagem && <Image source={{ uri: animal.imagem }} style={style.image} />}
            </View>
            <View style={style.info}>
                <Text style={style.name}>Nome: {animal.nome}</Text>
                <Text style={style.name}>Idade: {animal.idade}</Text>
                <Text style={style.name}>Pelagem: {animal.pelagem}</Text>
                <Text style={style.name}>Porte: {animal.porte}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    containerImage: {
        // justifyContent: 'center',
        // alignItems: 'center'
        width: '100%',
        height: 400,
    },
    image: {
        // width: 100,
        // height: 100,
        marginHorizontal: 10,
        marginTop: 10,
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
});

export default AnimalSearch