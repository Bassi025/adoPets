import { db } from "./SQLite";

// Criar a tabela de adoção
export function adocao() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "adocoes " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, id_instituicao, id_usuario, id_animal, status INT DEFAULT(1), dataAdocao TEXT, FOREIGN KEY(id_instituicao) REFERENCES instituicoes(id) ON DELETE CASCADE, FOREIGN KEY(id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE, FOREIGN KEY(id_animal) REFERENCES animais(id) ON DELETE CASCADE);");
    })
}

// Cadastro de adoções
export async function adicionarAdocao(adocao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (?,?,?,?,?)",
                [adocao.id_instituicao, adocao.id_usuario, adocao.id_animal, adocao.status, adocao.dataAdocao], (_, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Adocao criada adicionado com sucesso!");
                })
        })
    })
}

// Filtrar animais e status da instituição logada
export async function filtrarAdocoesInst(instituicao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome AS nome_animal, instituicoes.nome AS nome_instituicao, adocoes.id AS id_adocao, adocoes.status, adocoes.dataAdocao FROM animais INNER JOIN instituicoes ON instituicoes.id = animais.id_instituicao INNER JOIN adocoes ON adocoes.id_animal = animais.id WHERE instituicoes.id = ?;", [instituicao], (_, resultado) => {
                var adocoes = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    adocoes.push(resultado.rows.item(i));

                if (adocoes.length > 0)
                    resolve(adocoes)
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}

// Filtrar animais e status de todas as instituições cadastradas
export async function filtrarAdocoes() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome AS nome_animal, instituicoes.nome AS nome_instituicao, adocoes.id AS id_adocao, adocoes.status, adocoes.dataAdocao FROM animais INNER JOIN instituicoes ON instituicoes.id = animais.id_instituicao INNER JOIN adocoes ON adocoes.id_animal = animais.id;", [], (_, resultado) => {
                var adocoes = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    adocoes.push(resultado.rows.item(i));

                if (adocoes.length > 0)
                    resolve(adocoes)
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}

// Filtrar animal disponível pelo nome da instituição
export async function filtrarAdocoesPorAnimal(nome) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome AS nome_animal, instituicoes.nome AS nome_instituicao, adocoes.id AS id_adocao, adocoes.status, adocoes.dataAdocao FROM animais INNER JOIN instituicoes ON instituicoes.id = animais.id_instituicao INNER JOIN adocoes ON adocoes.id_animal = animais.id WHERE animais.nome LIKE ?;", [`${nome}`], (_, resultado) => {
                var tamanho = resultado.rows.length;
                if (tamanho > 0)
                    resolve(resultado.rows.item(0));
                else
                    reject("Animal não encontrado");
            })
        })
    })
}

// Atualizar status do animal
export async function atualizarAdocoesStatus(adocao) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE adocoes SET status = ? WHERE id = ?;", [adocao.status, adocao.id], (_, resultado) => {
                var tamanho = resultado.rowsAffected;
                if (tamanho > 0)
                    resolve("Status do animal foi atualizado!")
            },
                (_, error) => {
                    console.log(error);
                    reject(error);
                }
            )
        })
    })
}
