const candidatoService = require('../services/CandidatoService');
const status = require('http-status-codes');

const CpfNotExistMiddleware = async (req, res, next) => {
    const { cpf } = req.body;
    const cpfExist = await candidatoService.getByCpf(cpf);

    if (!cpfExist) return next();

    return res.status(status.CONFLICT).json(
        { message: "Candidato já está cadastrado!" });
}

const CpfExistsMiddleware = async (req, res, next) => {
    const { cpf } = req.params;
    const cpfExist = await candidatoService.getByCpf(cpf);

    if (cpfExist) return next();

    return res.status(status.NOT_FOUND).json(
        { message: "Candidato não encontrado!" });
}

module.exports = { 
    CpfNotExistMiddleware,
    CpfExistsMiddleware,
};
