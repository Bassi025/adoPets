import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Menu from './componentes/Menu';
import Usuario from './componentes/LoginUsuario';
import Instituicao from './componentes/LoginCentro';
import UsuarioCadastro from './componentes/UsuarioCadastro';
import CentroAdocaoCadastro from './componentes/CentroAdocaoCadastro';
import TelaInstituicao from './componentes/TelaInstituicao';
import TelaCadastroAnimais from './componentes/Tela_cadastro_animais';
import BuscarAnimais from './componentes/BuscarAnimais';
import TelaUsuario from './componentes/TelaUsuario';
import TelaLoading from './componentes/TelaLoading';
import TelaLogout from './componentes/TelaLogout';
import DeletarAnimais from './componentes/DeletarAnimais';
import SituacaoAnimais from './componentes/SituacaoAnimais';
import BuscarAnimais_Usuario from './componentes/BuscarAnimais_Usuario';
import BuscarInstituicao from './componentes/BuscarInstituicao';

const Stack = createNativeStackNavigator();

function Telas(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
        <Stack.Screen name="UsuarioCadastro" component={UsuarioCadastro} />
        <Stack.Screen name="CentroAdocaoCadastro" component={CentroAdocaoCadastro} />
        <Stack.Screen name="TelaInstituicao" component={TelaInstituicao} />
        <Stack.Screen name="TelaCadastroAnimais" component={TelaCadastroAnimais} />
        <Stack.Screen name="BuscarAnimais" component={BuscarAnimais} />
        <Stack.Screen name='DeletarAnimais' component={DeletarAnimais} />
        <Stack.Screen name='SituacaoAnimais' component={SituacaoAnimais} />
        <Stack.Screen name="TelaUsuario" component={TelaUsuario} />
        <Stack.Screen name="BuscarAnimais_Usuario" component={BuscarAnimais_Usuario} />
        <Stack.Screen name="BuscarInstituicao" component={BuscarInstituicao} />
        <Stack.Screen name="TelaLoading" component={TelaLoading} />
        <Stack.Screen name="TelaLogout" component={TelaLogout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Telas;
