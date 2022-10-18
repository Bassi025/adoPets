import { db } from "./SQLite";

export function usuario(){
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
         "Usuario " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco TEXT, cpf TEXT, dataNasc TEXT, telefone TEXT);");
    })
}

export async function adicionarUsuario(user){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Usuario (nome, endereco, cpf, dataNasci, telefone) VALUES (?,?,?,?,?);", [user.nome, user.endereco, user.cpf, user.dataNasc, user.telefone], () => {
                resolve("Usuario adicionada com sucesso")
            })
        })
    })
}

export async function buscaUsuario(){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Usuario;", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
}