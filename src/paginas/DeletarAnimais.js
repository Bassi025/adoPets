import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";

export default function DeletarAnimais() {
    
    const [deletar, setDeletar] = useState("");

    return (
        <View style={estilos.Screen}>
            <ScrollView style={estilos.boxPrincipal}>
                <Text style={estilos.textTitulo}>BUSQUE UM ANIMAL PARA DELETAR!</Text>
                <View style={estilos.boxInput}>
                    <TextInput
                        style={estilos.textImput}
                        onChangeText={setDeletar}
                    />
                </View>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.textButton}>Delete</Text>
                </TouchableOpacity>
                <View style={estilos.boxDados}>
                    <Text>Teste Delete Animais</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const estilos = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#F58055"
    },
    textTitulo: {
        fontSize: 50,
        fontFamily: "CuteFont-Regular",
        marginHorizontal: 60,
        marginVertical: 10,
        color: "#F58055",
        textAlign: "center"
    },
    textSmall: {
        fontSize: 10,
        fontFamily: "CuteFont-Regular",
        marginHorizontal: 100,
        marginVertical: 5,
        color: "#F58055",
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        marginHorizontal: 20,
        marginVertical: 8,
        fontSize: 20,
        lineHeight: 50,
        fontFamily: "Cuprum-Bold",
        color: "black"
    },
    boxInput: {
        width: 277,
        height: 45,
        marginHorizontal: 25,
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#11E5BF',
    },
    boxPrincipal: {
        width: "90%",
        height: "90%",
        backgroundColor: "#F6F6F6",
        marginVertical: 37,
        marginHorizontal: 20,
        borderRadius: 6,
        elevation: 4
    },
    boxDados: {
        width: "90%",
        height: "50%",
        backgroundColor: "#E8DFDD",
        marginHorizontal: 15,
        marginVertical: 40,
        borderRadius: 10
    },
    botao: {
        width: 250,
        height: 54,
        marginHorizontal: 45,
        marginTop: 30,
        backgroundColor: '#F58055',
        borderRadius: 20,
        borderWidth: 3,
        justifyContent: 'center',
        borderColor: 'black'
    },
    textButton: {
        fontColor: 'black',
        fontSize: 20,
        marginHorizontal: 95,
        marginVertical: 10,
        fontFamily: 'Cuprum-Bold',
    }
});
