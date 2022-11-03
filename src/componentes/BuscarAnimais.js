import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

import { buscaAnimais, buscaAnimal } from '../servicos/Animais';

export default function BuscarAnimais(props) {

  console.log(props);
  const [animais, setAnimais] = useState([{}]);
  const [busca, setBusca] = useState("");
  const [animal, setAnimal] = useState({});

  async function mostrarAnimais() {
    try {
      const response = await buscaAnimais();
      setAnimais(response);
      console.log("Animais: ", response);
    } catch (error) {
      alert("Error to request database.");
      console.log(error);
    }
  }

  useEffect(() => {
    mostrarAnimais();
  }, [animal]);

  async function buscarAnimal() {
    try {
      const response = await buscaAnimal(busca);
      // console.log("Animal buscado: ", response);
      setAnimal(response);
    } catch (error) {
      alert("Error to request database.");
      console.log(error);
    }
  }

  let listItemView = (item) => {
    console.log(item);
    return (
      <View>{
        JSON.stringify(item) !== "{}" ?
          <View key={item.id} style={estilos.containerDados}>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Pelagem: {item.pelagem}</Text>
            <Text>Porte: {item.porte}</Text>
          </View>:<View><Text>Não há animais cadastrados.</Text></View>}
      </View>
    );
  };

  return (
    <View style={estilos.Screen}>
      <ScrollView style={estilos.boxPrincipal}>
        <Text style={estilos.textTitulo}>BUSQUE UM ANIMAL!</Text>
        <View style={estilos.boxInput}>
          <TextInput
            style={estilos.textImput}
            onChangeText={setBusca}
          />
        </View>
        <TouchableOpacity style={estilos.botao} onPress={() => buscarAnimal()}>
          <Text style={estilos.textButton}>Pesquisar</Text>
        </TouchableOpacity>
        <View style={estilos.boxDados}>
          {JSON.stringify(animal) !== "{}" ?
            <View style={estilos.containerDados}>
              <Text>Nome: {animal.nome}</Text>
              <Text>Idade: {animal.idade}</Text>
              <Text>Pelagem: {animal.pelagem}</Text>
              <Text>Porte: {animal.porte}</Text>
            </View>
            :
            <FlatList
              showsVerticalScrollIndicator={false}
              data={animais}
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
  containerDados: {
    flex: 1,
    margin: 15,
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