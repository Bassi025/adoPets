import { db } from "./SQLite";

export function animais(){
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + "Animais " + "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade TEXT, pelagem TEXT, porte TEXT);");
    })
}

export async function adicionarAnimais(animais){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Animais (nome, idade, pelagem, porte) VALUES (?,?,?,?);", 
            [animais.nome, animais.idade , animais.pelagem , animais.porte], () => { 
                resolve("Animal adicionado com sucesso")
            })
        })
    })
}

export async function buscaAnimais(){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Animais;", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
}