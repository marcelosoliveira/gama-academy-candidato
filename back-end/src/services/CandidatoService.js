const candidato = require('../model/Candidato');

const create = async (
    { nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
        cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao }
    ) => {

        candidato.create(nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
            cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao);
};

const getByCpf = async (cpf) => {
    await candidato.getByCpf(cpf);
}

module.exports = { 
    getByCpf,
    create,
};