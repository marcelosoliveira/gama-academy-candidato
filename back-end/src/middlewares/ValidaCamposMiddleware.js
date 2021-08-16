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

  if (!nome || nome.length < 5 || nome.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Nome inválido!` });

  if (!cpf || cpf.length !== 14)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `CPF inválido!` });

  if (!cargo || cargo.length < 5 || cargo.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Cargo Profissão inválido!` });

  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Email inválido!` });

  if (!dataNasc ||
    dataNasc.match(
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]((19|20)\\d\\d)$/
    )    
  )
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Data de Nascimento inválido!` });

  if (!cep || !cep.match(/^[0-9]{5}-[0-9]{3}$/) || cep.length !== 9)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `CEP inválido!` });

  if (!endereco || endereco.length < 5 || endereco.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Endereço inválido!` });

  if (!bairro || bairro.length < 3 || bairro.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Bairro inválido!` });

  if (!cidade || cidade.length < 3 || cidade.length > 50)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Cidade inválido!` });

  if (!celular || celular.length !== 11 && celular.length !== 10)
    return res
      .status(status.BAD_REQUEST)
      .json({ message: `Celular inválido!` });

  next();
};

module.exports = { validaCampos };
