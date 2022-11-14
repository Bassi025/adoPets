import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { AuthContext } from '../contexto/auth';

const AnimalSearch = ({ animal }) => {
    const { usuario } = React.useContext(AuthContext);

    const navigation = useNavigation();

    function buscarAnimaisPorInstituicao() {
        if (usuario?.nome !== undefined) {
            navigation.navigate("BuscarAnimaisInstUsuario", { animal: animal });
        } else {
            return;
        }
    }

    return (
        <TouchableOpacity style={style.card} onPress={() => buscarAnimaisPorInstituicao()}>
            <View style={style.containerImage}>
                {animal.imagem && <Image source={{ uri: animal.imagem }} style={style.image} />}
            </View>
            <View style={style.info}>
                <Text style={style.name}>Nome: {animal.nome}</Text>
                <Text style={style.name}>Idade: {animal.idade}</Text>
                <Text style={style.name}>Pelagem: {animal.pelagem}</Text>
                <Text style={style.name}>Porte: {animal.porte}</Text>
            </View>
        </TouchableOpacity>
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