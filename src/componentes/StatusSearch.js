import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const StatusSearch = ({ adocao }) => {
    const navigation = useNavigation();

    function alterarStatus() {
        navigation.navigate("AdocoesAnimalStatus", { adocoes: adocao });
    }

    return (
        <TouchableOpacity style={style.card} onPress={() => {alterarStatus()}}>
            <View style={style.info}>
                <Text style={style.textInfo}>Nome do animal: {adocao.nome_animal}</Text>
                <Text style={style.textInfo}>Nome da instituição: {adocao.nome_instituicao}</Text>
                <Text style={style.textInfo}>Status: {adocao.status == 0 ? 'Disponível para adoção' : 'Adotado'}</Text>
                <Text style={style.textInfo}>Data de adoção: {adocao.dataAdocao}</Text>
            </View>
            <View style={style.cardText}>
                <Text style={style.text}>Alterar Status</Text>
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
    cardText: {
        flex: 1,
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

export default StatusSearch