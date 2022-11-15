import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';

import { buscarInstituicoes, buscarInstituicao } from '../servicos/Instituicao';

import InstitutionSearch from '../componentes/InstitutionSearch';

export default function BuscarInstituicao() {
  
  const [instituicao, setIntituicao] = useState({});
  const [instituicoes, setIntituicoes] = useState([{}]);
  const [busca, setBusca] = useState("");

  // Buscar todas as instituições
  async function mostrarInstituicoes() {
    try {
      const response = await buscarInstituicoes();
      setIntituicoes(response);
    } catch (error) {
      alert("Error to request database.");
      console.log(error);
    }
  }

  useEffect(useCallback(() => {
    mostrarInstituicoes();
  }, [instituicao]));

  // Buscar instituição pelo nome
  async function procurarInstituicao() {
    try {
      const response = await buscarInstituicao(busca);
      setIntituicao(response);
    } catch (error) {
      alert("Error to request database.");
      console.log(error);
    }
  }

  let listItemView = (item) => {
    return (
      <View>
        {JSON.stringify(item) !== "{}" ?
          <InstitutionSearch instituicao={item} /> :
          <View>
            <Text style={estilos.nome}>Não há instituições cadastradas.</Text>
          </View>
        }
      </View>
    );
  };

  return (
    <View style={estilos.Screen}>
      <ScrollView style={estilos.boxPrincipal}>
        <Text style={estilos.textTitulo}>BUSQUE UMA INSTITUICAO!</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textInput}
            placeholder="Meirelles"
            onChangeText={setBusca}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => procurarInstituicao()}>
          <Text style={estilos.textButton}>Pesquisar</Text>
        </TouchableOpacity>
        <View style={estilos.boxDados}>
          {JSON.stringify(instituicao) !== "{}" ?
            <InstitutionSearch instituicao={instituicao} /> :
            <FlatList
              showsVerticalScrollIndicator={false}
              data={instituicoes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => listItemView(item)}
            />
          }
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
  textInput: {
    height: 40,
    width: StyleSheet.inherit,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    border: 'none',
    // borderColor: 'gray',
    // borderWidth: StyleSheet.hairlineWidth,
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
    marginHorizontal: 80,
    marginVertical: 10,
    fontFamily: 'Cuprum-Bold',
  },
});