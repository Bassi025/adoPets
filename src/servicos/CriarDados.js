import { db } from "./SQLite";

// Criar registros de teste
export async function criarDados() {
    db.transaction((transaction, er) => {
        transaction.executeSql("INSERT INTO usuarios (nome, endereco, cpf, dataNasc, telefone) VALUES ('Joao Bassi','Rua: Nicolais Madura, 123.','123.123.123-12','10/10/2001','159983-70923');")
        transaction.executeSql("INSERT INTO usuarios (nome, endereco, cpf, dataNasc, telefone) VALUES ('Alexander Davis','Rua: Santos Cabral, 6533.','123.123.123-13','11/11/2005','159983-00103');")
        transaction.executeSql("INSERT INTO usuarios (nome, endereco, cpf, dataNasc, telefone) VALUES ('John Doe','Rua: Limeira Prado, 049.','123.123.123-14','12/12/2010','159983-90021');")
        
        transaction.executeSql("INSERT INTO instituicoes (nome, cnpj, endereco) VALUES ('Vila Olímpia','53.790.375/0001-68','Rua: Fernando Andrade, 2005.');")
        transaction.executeSql("INSERT INTO instituicoes (nome, cnpj, endereco) VALUES ('Meirelles','53.790.375/0001-67','Rua: Jaiminho Amaral, 215.');")
        transaction.executeSql("INSERT INTO instituicoes (nome, cnpj, endereco) VALUES ('Xangsui','53.790.375/0001-66','Rua: Acarajé Marte, 134.');")
        
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (1,'Pitoco','5','Macia','Grande', X'');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (1,'Jullyzinha','2','Grossa','Pequena', X'');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (2,'Bisteca','1','Macia','Pequeno', X'');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (2,'Bituca','8','Grossa','Grande', X'');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (3,'Bolinha','2','Grossa','Pequeno', X'');")
        transaction.executeSql("INSERT INTO animais (id_instituicao, nome, idade, pelagem, porte, imagem) VALUES (3,'Pipoca','10','Macia','Médio', X'');")
        
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (1,1,1,1,DateTime('now'));")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (2,2,2,1,DateTime('now'));")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (3,3,3,1,DateTime('now'));")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (1,2,4,0,DateTime('now'));")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (2,3,5,1,DateTime('now'));")
        transaction.executeSql("INSERT INTO adocoes (id_instituicao, id_usuario, id_animal, status, dataAdocao) VALUES (3,1,6,0,DateTime('now'));")
    })
}