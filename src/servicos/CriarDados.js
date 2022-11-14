import { db } from "./SQLite";

// Criar registros de teste
export async function criarDados() {
    db.transaction((transaction) => {
        transaction.executeSql("INSERT INTO usuarios (nome, endereco, cpf, dataNasc, telefone) VALUES ('Joao Bassi','Rua: Nicolais Madura, 123.','123.123.123-12','10/10/2001','159983-70923');")
        transaction.executeSql("INSERT INTO instituicoes (nome, cnpj, endereco) VALUES ('Vila Olímpia','53.790.375/0001-68','Rua: Fernando Andrade, 2005.');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (1,'Pitoco','5','Macia','Grande','data:image/jpeg;base64,UklGRqZtAABXRUJQVlA4IJptAAD…BnEQNpDKzUcD7KpkZLwEQ7MWGmLIBg8gZbZFgjoAAAAAAAA==');")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (1,1,1,1,DateTime('now'));")
    })
}