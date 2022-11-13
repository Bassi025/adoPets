import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const InstitutionSearch = ({ instituicao }) => {
    return (
        <TouchableOpacity style={style.card} onPress={() => console.log(instituicao.id)}>
            <View style={style.info}>
                <Text style={style.name}>Nome: {instituicao.nome}</Text>
                <Text style={style.name}>Endereço: {instituicao.cnpj}</Text>
                <Text style={style.name}>Cnpj: {instituicao.endereco}</Text>
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

export default InstitutionSearch