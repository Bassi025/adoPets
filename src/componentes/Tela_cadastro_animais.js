import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { adicionarAnimais } from '../servicos/Animais';

export default function TelaCadastroAnimais() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pelagem, setPelagem] = useState("");
  const [porte, setPorte] = useState("");

  async function cadastrarAnimais() {
    const animais = {
      nome: nome,
      idade: idade,
      pelagem: pelagem,
      porte: porte
    }

    try {
      const response = await adicionarAnimais(animais);
      alert(response);
      navigation.navigate("TelaInstituicao");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={estilos.Screen}>
      <View style={estilos.boxPrincipal}>
        <Text style={estilos.textTitulo}>CADASTRO ANIMAIS</Text>
        <Text style={estilos.text}>Qual o nome do pet?</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textImput}
            onChangeText={setNome}
            value={nome}
          />
        </View>
        <Text style={estilos.text}>Qual a idade aproximada?</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textImput}
            onChangeText={setIdade}
            value={idade}
          />
        </View>
        <Text style={estilos.text}>Qual a pelagem?</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textImput}
            onChangeText={setPelagem}
            value={pelagem}
          />
        </View>
        <Text style={estilos.text}>Qual o porte do animal?</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textImput}
            onChangeText={setPorte}
            value={porte}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => cadastrarAnimais()}>
          <Text style={estilos.textButton}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#F58055'
  },
  textTitulo: {
    fontSize: 42,
    fontFamily: 'CuteFont-Regular',
    marginHorizontal: 30,
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
    backgroundColor: 'white',
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
    backgroundColor: '#F58055',
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: 'center',
    borderColor: 'black'
  },
  textButton: {
    fontColor: 'black',
    fontSize: 20,
    marginHorizontal: 76,
    marginVertical: 10,
    fontFamily: 'Cuprum-Bold',
  },
});
