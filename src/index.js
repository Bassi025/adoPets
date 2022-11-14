import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider } from './contexto/auth';

import Menu from './paginas/Menu';
import Usuario from './paginas/LoginUsuario';
import Instituicao from './paginas/LoginCentro';
import UsuarioCadastro from './paginas/UsuarioCadastro';
import AnimalCadastro from './paginas/AnimalCadastro';
import CentroAdocaoCadastro from './paginas/CentroAdocaoCadastro';
import TelaInstituicao from './paginas/TelaInstituicao';
import BuscarAnimais from './paginas/BuscarAnimais';
import TelaUsuario from './paginas/TelaUsuario';
import TelaLoading from './paginas/TelaLoading';
import TelaLogout from './paginas/TelaLogout';
import DeletarAnimais from './paginas/DeletarAnimais';
import SituacaoAnimais from './paginas/SituacaoAnimais';
import AdocoesAnimalStatus from './paginas/AdocoesAnimalStatus';
import BuscarAnimaisUsuario from './paginas/BuscarAnimaisUsuario';
import BuscarAnimaisInstUsuario from './paginas/BuscarAnimaisInstUsuario';
import BuscarInstituicao from './paginas/BuscarInstituicao';

const Stack = createNativeStackNavigator();

function Telas() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Usuario" component={Usuario} />
          <Stack.Screen name="Instituicao" component={Instituicao} />
          <Stack.Screen name="UsuarioCadastro" component={UsuarioCadastro} />
          <Stack.Screen name="CentroAdocaoCadastro" component={CentroAdocaoCadastro} />
          <Stack.Screen name="TelaInstituicao" component={TelaInstituicao} />
          <Stack.Screen name="AnimalCadastro" component={AnimalCadastro} />
          <Stack.Screen name="BuscarAnimais" component={BuscarAnimais} />
          <Stack.Screen name='DeletarAnimais' component={DeletarAnimais} />
          <Stack.Screen name='SituacaoAnimais' component={SituacaoAnimais} />
          <Stack.Screen name='AdocoesAnimalStatus' component={AdocoesAnimalStatus} />
          <Stack.Screen name="TelaUsuario" component={TelaUsuario} />
          <Stack.Screen name="BuscarAnimaisUsuario" component={BuscarAnimaisUsuario} />
          <Stack.Screen name="BuscarAnimaisInstUsuario" component={BuscarAnimaisInstUsuario} />
          <Stack.Screen name="BuscarInstituicao" component={BuscarInstituicao} />
          <Stack.Screen name="TelaLoading" component={TelaLoading} />
          <Stack.Screen name="TelaLogout" component={TelaLogout} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default Telas;
