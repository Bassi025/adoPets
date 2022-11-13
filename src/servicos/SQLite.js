import * as SQLite from "expo-sqlite";

function abreConexao(){
    const dataBase = SQLite.openDatabase("adopets");
    return dataBase;
}

export const db = abreConexao();