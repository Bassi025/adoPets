import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const InstitutionSearch = ({ instituicao }) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={style.card} onPress={() => navigation.navigate("BuscarAnimaisInstUsuario", { instituicao: instituicao })} >
            <View style={style.info}>
                <Text style={style.textInfo}>Nome: {instituicao.nome}</Text>
                <Text style={style.textInfo}>Cnpj: {instituicao.cnpj}</Text>
                <Text style={style.textInfo}>Endereço: {instituicao.endereco}</Text>
            </View>
            <View style={style.cardText}>
                <Text style={style.text}>Ver animais desta instituição</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    textInfo: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    info: {
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
    cardText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 16,
        marginBottom: 8
    },
    text: {
        color: '#F58055'
    }
});

export default InstitutionSearch