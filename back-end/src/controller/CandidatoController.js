const candidatoService = require('../services/CandidatoService');
const status = require('http-status-codes');

const create = async (req, res) => {
    try {
        const candidatoObjeto = req.body;
        await candidatoService.create(candidatoObjeto) 
        res.status(status.CREATED).send({ message: "Candidato cadastrado com sucesso!"});        
    } catch (error) {
        res.status(status.INTERNAL_SERVER_ERROR);
    }
}

const getByCpf = async (req, res) => {
    try {
        const { cpf } = req.params;
        console.log(cpf)
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