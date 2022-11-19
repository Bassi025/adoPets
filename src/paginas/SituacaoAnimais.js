import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

import { AuthContext } from "../contexto/auth";

import { filtrarAdocoesInst, filtrarAdocoesPorAnimal } from "../servicos/Adocao";

import StatusSearch from "../componentes/StatusSearch";

export default function SituacaoAnimais() {

  const { instituicao } = React.useContext(AuthContext);

  const [adocaoAnimal, setAdocaoAnimal] = useState({});
  const [adocoes, setAdocoes] = useState([{}]);
  const [busca, setBusca] = useState("");

  // Buscar situação dos animais da instituição
  async function mostrarAdocoes() {
    try {
      const response = await filtrarAdocoesInst(instituicao.id);
      setAdocoes(response);
    } catch (error) {
      alert("Error to request database.");
      console.log(error);
    }
  }

  useEffect(useCallback(() => {
    mostrarAdocoes();
  }, [adocaoAnimal]));

  // Buscar animal pelo nome da instituição
  async function procurarAdocoesPorAnimal() {
    try {
      console.log(busca)
      const response = await filtrarAdocoesPorAnimal(busca);
      setAdocaoAnimal(response);
    } catch (error) {
      alert("ERRO: " + error);
    }
  }

  let listItemView = (item) => {
    return (
      <View>
        {JSON.stringify(item) !== "{}" ?
          <StatusSearch adocao={item} /> :
          <View>
            <Text style={estilos.nome}>Não há adoções cadastradas.</Text>
          </View>
        }
      </View>
    );
  };

  return (
    <View style={estilos.Screen}>
      <View style={estilos.boxPrincipal}>
        <Text style={estilos.textTitulo}>BUSQUE UM ANIMAL PARA VER SUA SITUCAO!</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textInput}
            placeholder="Jullyzinha"
            onChangeText={setBusca}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => procurarAdocoesPorAnimal()}>
          <Text style={estilos.textButton}>Pesquisar</Text>
        </TouchableOpacity>
        <View style={estilos.boxDados}>
          {JSON.stringify(adocaoAnimal) !== "{}" ?
            <StatusSearch adocao={adocaoAnimal} /> :
            <FlatList
              showsVerticalScrollIndicator={false}
              data={adocoes}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)}
            />
          }
        </View>
      </View>
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
  textInput: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    border: 'none'
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
    height: "40%",
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
    marginHorizontal: 80,
    marginVertical: 10,
    fontFamily: 'Cuprum-Bold',
  }
});
