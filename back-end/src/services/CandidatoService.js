const candidato = require('../model/Candidato');

const create = async (
    { name, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
        logradouro, numero, cidade, tel1, tel2, celular, contato, rg, veiculo, cnh }
    ) => {

        candidato.create(name, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
            logradouro, numero, cidade, tel1, tel2, celular, contato, rg, veiculo, cnh);
};

const getByCpf = async (cpf) => {
    await candidato.getByCpf(cpf);
}

module.exports = { 
    getByCpf,
    create,
};