import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [usuario, setUsuario] = useState({
        id: undefined,
        nome: '',
        endereco: '',
        cpf: '',
        dataNasc: '',
        telefone: ''
    });

    const [instituicao, setInstituicao] = useState({
        id: undefined,
        nome: '',
        cnpj: '',
        endereco: '',
    });

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, instituicao, setInstituicao }}>
            {props.children}
        </AuthContext.Provider>
    );
};