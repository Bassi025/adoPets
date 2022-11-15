import React, { useEffect } from "react";

import Telas from "./src/index";

// Rest of the import statements
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

import { deletarTabelas } from "./src/servicos/DeletarTabelas";
import { criarDados } from "./src/servicos/CriarDados";
import { instituicao } from "./src/servicos/Instituicao";
import { usuario } from "./src/servicos/Usuario";
import { animais } from "./src/servicos/Animais";
import { adocao } from "./src/servicos/Adocao";

export default function App() {

  useEffect(() => {
    deletarTabelas(),
    instituicao(),
    usuario(),
    animais(),
    adocao(),
    criarDados()
  }, [])

  const [fontsLoaded] = useFonts({
    'CuteFont-Regular': require('./src/assets/fonts/CuteFont-Regular.ttf'),
    'Cuprum-Bold': require('./src/assets/fonts/Cuprum-Bold.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Telas />
  );
}
