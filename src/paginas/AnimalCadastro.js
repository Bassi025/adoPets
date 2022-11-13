import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { adicionarAnimal } from '../servicos/Animais';
import { buscarInstituicoes } from '../servicos/Instituicao';

import { Formik, Form } from 'formik';
import * as yup from 'yup';

import FormikControl from '../componentes/FormikControl';

export default function AnimalCadastro() {
  const navigation = useNavigation();

  const [instituicoes, setIntituicoes] = useState([]);

  const [image, setImage] = useState(null);

  // Pegar imagem
  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  // Efetuar cadastro do animal
  async function cadastrarAnimal(values, resetForm) {
    const { nome, idade, pelagem, porte, instituicao } = values;

    try {
      const animal = {
        nome: nome,
        idade: idade,
        pelagem: pelagem,
        porte: porte,
        imagem: image,
        id_instituicao: instituicao
      }

      const response = await adicionarAnimal(animal);
      alert(response);

      resetForm({ values: '' })

      navigation.navigate("TelaInstituicao");
    } catch (error) {
      console.log(error);
    }
  }

  // Buscar instituições
  async function mostrarIntituicoes() {
    try {
      const response = await buscarInstituicoes();
      setIntituicoes(response);
    } catch (error) {
      alert("Houve um erro interno no servidor");
      console.log(error);
    }
  }

  useEffect(() => {
    mostrarIntituicoes();
  }, []);

  return (
    <ScrollView style={estilos.Screen}>
      <View style={estilos.boxPrincipal}>
        <Text style={estilos.textTitulo}>CADASTRO ANIMAIS</Text>
        <Formik
          initialValues={{
            nome: '',
            idade: '',
            pelagem: '',
            porte: '',
            imagem: undefined,
            instituicao: undefined,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => cadastrarAnimal(values, resetForm)}
        >
          {({ handleSubmit }) => (
            <Form>
              <Text style={estilos.text}>Qual o nome do pet?</Text>
              <FormikControl
                control='input'
                type='text'
                label=''
                name='nome'
              />
              <Text style={estilos.text}>Qual a idade aproximada?</Text>
              <FormikControl
                control='input'
                type='text'
                label=''
                name='idade'
              />
              <Text style={estilos.text}>Qual a pelagem?</Text>
              <FormikControl
                control='input'
                type='text'
                label=''
                name='pelagem'
              />
              <Text style={estilos.text}>Qual o porte do animal?</Text>
              <FormikControl
                control='input'
                type='text'
                label=''
                name='porte'
              />
              <Text style={estilos.text}>Qual o nome da instituição?</Text>
              <FormikControl
                control='select'
                label=''
                name='instituicao'
                options={instituicoes}
              />
              <FormikControl
                control='image'
                label=''
                name='imagem'
                image={image}
                fn={pickerImage}
              />

              <TouchableOpacity
                style={estilos.botao}
                onPress={handleSubmit}
              >
                <Text style={estilos.textButton}>CADASTRAR</Text>
              </TouchableOpacity>
            </Form>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const validationSchema = yup.object().shape({
  nome: yup
    .string()
    .min(6, ({ min }) => `Nome deve ter no minímo ${min} caracteres`)
    .required('O nome é obrigatório'),
  idade: yup
    .string()
    .required('O idade é obrigatória'),
  pelagem: yup
    .string()
    .min(4, ({ min }) => `Pelagem deve ter no minímo ${min} caracteres`)
    .max(50, ({ max }) => `Pelagem deve ter no minímo ${max} caracteres`)
    .required('A pelagem é obrigatória'),
  porte: yup
    .string()
    .min(4, ({ min }) => `Porte deve ter no minímo ${min} caracteres`)
    .max(50, ({ max }) => `Porte deve ter no minímo ${max} caracteres`)
    .required('O porte é obrigatório'),
  imagem: yup
    .mixed()
    .nullable(),
  instituicao: yup
    .number()
    .required('A instituição é obrigatória')
})

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
  pickImage: {
    width: '80%',
    marginHorizontal: 37,
    marginTop: 10,
  },
});
