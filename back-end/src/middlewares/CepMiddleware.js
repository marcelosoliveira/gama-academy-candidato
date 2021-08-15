const axios = require('axios').default;
const status = require('http-status-codes');

const CepMiddleware = async (req, res, next) => {
    const { cep } = req.body;

    const ceps = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (ceps) return next();

    return res.status(status.NOT_FOUND).json({ message: "Cep não encontrado!" });
}

module.exports = { 
    CepMiddleware,
};