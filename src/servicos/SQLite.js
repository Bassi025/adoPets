import * as SQLite from "expo-sqlite";

function abreConecao(){
    const dataBase = SQLite.openDatabase("adopets");
    return dataBase;
}

export const db = abreConecao();