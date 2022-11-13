import { db } from "./SQLite";

// Criar a tabela de adoção
export function adocao() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
        "adocoes " + 
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, id_instituicao, id_usuario, id_animal, status INT, dataAdocao TEXT, FOREIGN KEY(id_instituicao) REFERENCES Instituicao(id) ON DELETE CASCADE, FOREIGN KEY(id_usuario) REFERENCES Usuario(id) ON DELETE CASCADE, FOREIGN KEY(id_animal) REFERENCES Animal(id) ON DELETE CASCADE);");
    })
}

// Cadastro de adoções
export async function adicionarAdocao(adocao) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (?,?,?,?,?)",
                [adocao.id_instituicao, adocao.id_usuario, adocao.id_animal, adocao.status], (_, resultado) => {
                    if (resultado.rowsAffected > 0)
                        resolve("Adocao criada adicionado com sucesso!");
                })
        })
    })
}