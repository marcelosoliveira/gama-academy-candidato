const conn = require('../config/connect');

const getByCpf = async (cpf) => {  
    const [[candidato]] = await conn.execute(
      'SELECT * FROM candidatos WHERE candidatos.cpf = ?;', [cpf],
    );
    console.log(candidato) 
    return candidato;
  };

  // const getByEmail = async (email) => {  
  //   const [[user]] = await conn.execute(
  //     'SELECT * FROM users WHERE users.email = ?;', [email],
  //   );  
  //   return user;
  // };
  
  const create = async (
    nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
    cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao
    ) => conn.execute(
    `INSERT INTO candidatos (nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
      logradouro, numero, cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [nome, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
      logradouro, numero, cidade, tel_fixo1, tel_fixo2, celular, contato, identidade, possui_veiculo, habilitacao],
  );
  
  module.exports = { 
    getByCpf,
    create,
  };