import { db } from "./SQLite";

// Deletar tabela de animais
export function deletarTabelas() {
    db.transaction((transaction) => {
        transaction.executeSql("DROP TABLE usuarios;");
        transaction.executeSql("DROP TABLE instituicoes;");
        transaction.executeSql("DROP TABLE animais;");
        transaction.executeSql("DROP TABLE adocoes;");
    })
}