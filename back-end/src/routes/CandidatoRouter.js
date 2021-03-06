const express = require('express');
const status = require('http-status-codes');
const { CpfExistsMiddleware, CpfNotExistMiddleware } = require('../middlewares/CpfMiddleware');
const { CepMiddleware } = require('../middlewares/CepMiddleware');
const { validaCampos } = require('../middlewares/ValidaCamposMiddleware');
const { create, getByCpf } = require('../controller/CandidatoController');

const router = express.Router();

router.post('/cadastrar', validaCampos, CpfNotExistMiddleware, CepMiddleware, create);
router.get('/buscar/:cpf', CpfExistsMiddleware, getByCpf);

router.use((err, _req, res, _next) => {
    res.status(status.INTERNAL_SERVER_ERROR).json({
        Error: `ERROR! ${err.message}`,
    })
});

module.exports = router;
