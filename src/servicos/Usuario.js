import { db } from "./SQLite";

// Criar tabela de usuário
export function usuario() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "usuarios " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL UNIQUE, endereco TEXT, cpf TEXT NOT NULL UNIQUE, dataNasc TEXT, telefone TEXT);");
    })
}

// Cadastro de usuário
export async function adicionarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO usuarios (nome, endereco, cpf, dataNasc, telefone) VALUES (?,?,?,?,?);",
                [usuario.nome, usuario.endereco, usuario.cpf, usuario.dataNasc, usuario.telefone], (_, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Usuario adicionado com sucesso!")
                },
                (_, error) => {
                    console.log(error);
                    reject("Este usuário já existe");
                })
        })
    })
}

// Logar usuário
export async function logarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM usuarios WHERE nome = ? AND cpf = ?",
                [`${usuario.nome}`, `${usuario.cpf}`], (_, resultado) => {
                    var tamanho = resultado.rows.length;
                    if (tamanho > 0)
                        resolve(resultado.rows.item(0));
                    else
                        reject("Usuário não encontrado");
                })
        })
    })
}