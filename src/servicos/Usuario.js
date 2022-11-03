import { db } from "./SQLite";

export function usuario(){
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
         "Usuario " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco TEXT, cpf TEXT, dataNasc TEXT, telefone TEXT);");
    })
}

// Cadastro de usuario
export async function adicionarUsuario(usuario){
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Usuario (nome, endereco, cpf, dataNasc, telefone) VALUES (?,?,?,?,?);", 
            [usuario.nome, usuario.endereco, usuario.cpf, usuario.dataNasc, usuario.telefone], (err, resultado) => {
                if (resultado.rowsAffected > 0)
                    resolve("Usuario adicionado com sucesso!")
            })
        })
    })
}

// Login de usuario
export async function loginUsuario(usuario){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Usuario WHERE nome = ? AND cpf = ?", 
            [`${usuario.nome}`, `${usuario.cpf}`], (err, resultado) => {
                var tamanho = resultado.rows.length;
                if (tamanho > 0)
                    resolve(resultado.rows.item(0));
            })
        })
    })
}

// Buscar todos os usuarios
export async function buscaUsuario(){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Usuario", [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            })
        })
    })
}