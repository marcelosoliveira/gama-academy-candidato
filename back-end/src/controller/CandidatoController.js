const candidatoService = require('../services/CandidatoService');
const status = require('http-status-codes');

const create = async (req, res) => {
    try {
        const candidatoObjeto = req.body;    
        res.status(status.CREATED).send(candidatoService.create(candidatoObjeto));        
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