import { db } from "./SQLite";

// Criar tabela instituição
export function instituicao() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "instituicoes " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL UNIQUE, cnpj TEXT NOT NULL UNIQUE, endereco TEXT NOT NULL);");
    })
}

// Cadastro de instituição
export async function adicionarInstituicao(instituicao) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO instituicoes (nome, cnpj, endereco) VALUES (?,?,?);",
                [instituicao.nome, instituicao.cnpj, instituicao.endereco], (_, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Instituição adicionada com sucesso!");
                },
                (_, error) => {
                    console.log(error);
                    reject("Está instituição já existe");
                }
            )
        })
    })
}

// Logar instituição
export async function logarInstituicao(instituicao) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM instituicoes WHERE nome = ? AND cnpj = ?;",
                [`${instituicao.nome}`, `${instituicao.cnpj}`], (_, resultado) => {
                    var tamanho = resultado.rows.length;
                    if (tamanho > 0)
                        resolve(resultado.rows.item(0));
                    else
                        reject("Instituição não encontrada");
                })
        })
    })
}

// Buscar uma instituição por nome
export async function buscarInstituicao(nome) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM instituicoes where nome LIKE ?;", [`${nome}`], (_, resultado) => {
                var tamanho = resultado.rows.length;
                if (tamanho > 0)
                    resolve(resultado.rows.item(0));
                else
                    reject("Instituição não encontrada");
            })
        })
    })
}

// Buscar todas as instituições
export async function buscarInstituicoes() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM instituicoes;", [], (_, resultado) => {
                var instituicoes = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    instituicoes.push(resultado.rows.item(i));

                if (instituicoes.length > 0)
                    resolve(instituicoes)
            })
        })
    })
}

// Buscar instituição que está logada
export async function buscarInstituicaoLogada(instituicao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM instituicoes WHERE id = ?;", [instituicao], (_, resultado) => {
                var instituicoes = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    instituicoes.push(resultado.rows.item(i));

                if (instituicoes.length > 0)
                    resolve(instituicoes)
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}