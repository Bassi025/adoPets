import { db } from "./SQLite";

// Criar a tabela de animais
export function animais() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "animais " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT,  id_instituicao INTEGER NOT NULL, nome TEXT NOT NULL, idade TEXT NOT NULL, pelagem TEXT NOT NULL, porte TEXT NOT NULL, imagem BLOB NOT NULL, FOREIGN KEY(id_instituicao) REFERENCES instituicoes(id) ON DELETE CASCADE);");
    })
}

// Cadastro de animal
export async function adicionarAnimal(animal) {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (?,?,?,?,?,?);",
                [animal.id_instituicao, animal.nome, animal.idade, animal.pelagem, animal.porte, animal.imagem], (_, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Animal adicionado com sucesso!");
                })
        })
    })
}

// Buscar um animal por nome
export async function buscarAnimal(nome) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM animais where nome LIKE ?", [`${nome}`], (_, resultado) => {
                var tamanho = resultado.rows.length;
                if (tamanho > 0)
                    resolve(resultado.rows.item(0));
            })
        })
    })
}

// Filtrar um animal com status disponível pelo nome
export async function filtrarAnimalDisponivel(nome) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome, animais.idade, animais.pelagem, animais.porte, animais.imagem, animais.id_instituicao FROM animais INNER JOIN adocoes ON adocoes.id_animal = animais.id WHERE adocoes.status = 0 AND nome LIKE ?;", [`${nome}`], (_, resultado) => {
                var tamanho = resultado.rows.length;
                if (tamanho > 0)
                    resolve(resultado.rows.item(0));
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}

// Buscar todos os animais
export async function buscarAnimais() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM animais", [], (_, resultado) => {
                var animais = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    animais.push(resultado.rows.item(i));

                if (animais.length > 0)
                    resolve(animais)
            })
        })
    })
}

// Filtrar por todos animais com status disponível
export async function filtrarAnimaisDisponiveis() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome, animais.idade, animais.pelagem, animais.porte, animais.imagem, animais.id_instituicao FROM animais INNER JOIN adocoes ON adocoes.id_animal = animais.id WHERE adocoes.status = 0;", [], (_, resultado) => {
                var animais = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    animais.push(resultado.rows.item(i));

                if (animais.length > 0)
                    resolve(animais)
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}

// Filtrar animais por instituição
export async function filtrarAnimais(instituicao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM animais WHERE id_instituicao = ?;", [instituicao], (_, resultado) => {
                var animais = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    animais.push(resultado.rows.item(i));

                if (animais.length > 0)
                    resolve(animais)
            })
        })
    })
}

// Filtrar por todos animais com status disponível por instituição
export async function filtrarAnimaisDisponiveisInst(instituicao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT animais.nome, animais.idade, animais.pelagem, animais.porte, animais.imagem, animais.id_instituicao FROM animais INNER JOIN adocoes ON adocoes.id_animal = animais.id WHERE animais.id_instituicao = ? AND adocoes.status = 0;", [instituicao], (_, resultado) => {
                var animais = [];
                for (let i = 0; i < resultado.rows.length; ++i)
                    animais.push(resultado.rows.item(i));

                if (animais.length > 0)
                    resolve(animais)
            },
                (_, error) => {
                    console.log(error);
                }
            )
        })
    })
}
