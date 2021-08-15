const status = require("http-status-codes");

const validaCampos = (req, res, next) => {
  const {
    nome,
    cpf,
    cargo,
    email,
    dataNasc,
    cep,
    endereco,
    bairro,
    cidade,
    celular,
  } = req.body;

  if (nome.length < 5 || nome.length > 50 || !nome)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Nome: ${nome} inválido!` });

  if (cpf.length !== 14 || !cpf)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `CPF: ${cpf} inválido!` });

  if (cargo.length < 5 || cargo.length > 50 || !cargo)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Cargo Profissão: ${cargo} inválido!` });

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || !email)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Email: ${email} inválido!` });

  if (
    dataNasc.match(
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$/
    ) ||
    !dataNasc
  )
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Data de Nascimento: ${dataNasc} inválido!` });

  if (cep.length !== 9 || !cep)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `CEP: ${cep} inválido!` });

  if (endereco.length < 5 || endereco.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Endereço: ${endereco} inválido!` });

  if (bairro.length < 3 || bairro.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Bairro: ${bairro} inválido!` });

  if (cidade.length < 3 || cidade.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Cidade: ${cidade} inválido!` });

  if (celular.length !== 11 || celular.length !== 10)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Celular: ${celular} inválido!` });

  next();
};

module.exports = { validaCampos };
