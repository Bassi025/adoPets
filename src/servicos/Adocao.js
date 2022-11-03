import { db } from "./SQLite";

// Cria a tabela de adoção
export function adocao() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + "Adocao " + "(id INTEGER PRIMARY KEY AUTOINCREMENT, status INT, FOREIGN KEY(id_usuario) REFERENCES Usuario(id), FOREIGN KEY(id_animal) REFERENCES Animal(id));");
    })
}

// Faz o cadastro de adoções
export async function adicionarAdocao(adocao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Adocao (status, id_usuario, id_animal) VALUES (?,?,?)",
                [adocao.status, adocao.id_usuario, adocao.id_animal], (err, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Adocao criada adicionado com sucesso!");
                })
        })
    })
}