const candidatoModel = require('../model/Candidato');

const create = async (
    { nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
        cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao }
    ) => {

        candidatoModel.create(nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
            cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao);
};

const getByCpf = async (cpf) => {
    const candidatoCPf = await candidatoModel.getByCpf(cpf);
    
    return candidatoCPf;
}

module.exports = { 
    getByCpf,
    create,
};