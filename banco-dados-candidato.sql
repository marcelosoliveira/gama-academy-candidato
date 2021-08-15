CREATE DATABASE cad_candidate;

USE cad_candidate;

CREATE TABLE candidatos (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(14) UNIQUE NOT NULL,
  cargo VARCHAR(50) NOT NULL,
  email VARCHAR(30) NOT NULL,
  data_nasc DATE NOT NULL,
  civil VARCHAR(30),
  sexo VARCHAR(20),
  cep VARCHAR(9) NOT NULL,
  endereco VARCHAR(100) NOT NULL,
  bairro VARCHAR(50) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  tel_fixo1 VARCHAR(14),
  tel_fixo2 VARCHAR(14),
  celular VARCHAR(13) NOT NULL,
  contato VARCHAR(13),
  identidade VARCHAR(12) NOT NULL,
  possui_veiculo VARCHAR(20),
  habilitacao VARCHAR(20)   
) ENGINE InnoDB DEFAULT CHARSET='utf8';
