import { db } from "./SQLite";

export function instituicao(){
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
         "Instituicao " +
         "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cnpj TEXT, endereco TEXT);");
    })
}

// Cadastro de instituição
export async function adicionarInst(inst){
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Instituicao (nome, cnpj, endereco) VALUES (?,?,?);", 
            [inst.nome, inst.cnpj, inst.endereco], (err, resultado) => {
                if (resultado.rowsAffected > 0)
                    resolve("Instituicao adicionada com sucesso!")
            })
        })
    })
}

// Busca de instituições
export async function buscaInst(){
    return new Promise((resolve)=>{
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Instituicao", [], (transaction, resultado) => {
                var instituicoes = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    instituicoes.push(resultado.rows.item(i));

                if (instituicoes.length > 0)
                    resolve(instituicoes)
            })
        })
    })
}