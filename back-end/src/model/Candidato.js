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
    name, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
    logradouro, numero, cidade, tel1, tel2, celular, contato, rg, veiculo, cnh
    ) => conn.execute(
    `INSERT INTO candidatos (name, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
      logradouro, numero, cidade, tel1, tel2, celular, contato, rg, veiculo, cnh) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [name, cpf, cargo, email, dataNasc, civil, sexo, cep, endereco, bairro, 
      logradouro, numero, cidade, tel1, tel2, celular, contato, rg, veiculo, cnh],
  );
  
  module.exports = { 
    getByCpf,
    create,
  };