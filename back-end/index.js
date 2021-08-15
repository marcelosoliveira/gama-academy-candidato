require('dotenv/config');

const express = require('express');
const status = require('http-status-codes');
const cors = require('cors');
const routerCandidato = require('./src/routes/CandidatoRouter');

const app = express();
app.use(cors());
app.use(express.json());

const { PORT } = process.env;

app.use('/candidato', routerCandidato);

app.listen(PORT, () => {
    console.log(`App executando na porta ${ PORT }`);
});

app.use((err, _req, res, _next) => {
    res.status(status.INTERNAL_SERVER_ERROR).json({
        Error: `ERROR! ${err.message}`,
    })
});