const candidatoService = require('../services/CandidatoService');
const status = require('http-status-codes');

const create = async (req, res) => {
    try {
        const candidato = req.body;
        await candidatoService.create(candidato) 
        res.status(status.CREATED).send({ message: "Candidato cadastrado com sucesso!"});        
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR);
    }
}

const getByCpf = async (req, res) => {
    try {
        const { cpf } = req.params;
        const candidato = await candidatoService.getByCpf(cpf);
        res.status(status.OK).json(candidato);        
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { 
    getByCpf,
    create,
};
