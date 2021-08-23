import React, { useState, useCallback } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CustomMessage from "../components/CustomMessage";
import CustomHeader from "../components/CustomHeader";
import { fetchBuscaCandidato } from "../service/auth";

export default function Candidato() {
  const [cpfRequest, setCpfRequest] = useState(new Map());

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setCpfRequest((prevState) => {
      return new Map(prevState).set(name, value);
    });
  }, []);

  const handleSubmit = async () => {
    const cpf = cpfRequest.get("cpf");
    const response = await fetchBuscaCandidato(cpf);
    if (!response) return;
    alert(`
      Id: ${response.data.id}
      Nome: ${response.data.nome}
      Cpf: ${response.data.cpf}
      Cargo Pretendido: ${response.data.cargo}
      Celular: ${response.data.celular}
      Data de Nascimento: ${response.data.data_nasc}
      Sexo: ${response.data.sexo}
      Endereco: ${response.data.endereco}
      Bairro: ${response.data.bairro}
      Cidade: ${response.data.cidade}
      Cep: ${response.data.cep}
      Estado Civil: ${response.data.civil}
      Contato: ${response.data.contato}
      Email: ${response.data.email}
      Habilitacao: ${response.data.habilitacao}
      Identidade: ${response.data.identidade}
      Possui Veículo: ${response.data.possui_veiculo}
      Telefone Fixo 1: ${response.data.tel_fixo1}
      Telefone Fixo 2: ${response.data.tel_fixo2}
      `);
  };

  return (
    <div className="ui raised very padded text container segment">
      <CustomMessage>
        <Link to="/cadastro">Voltar para cadastro?</Link>
      </CustomMessage>
      <Grid
        textAlign="center"
        style={{ height: "70vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <CustomHeader message="Buscar Candidato" />
          <Form.Input
            fluid
            placeholder="CPF"
            type="text"
            name="cpf"
            onChange={(e) => handleInputChange(e)}
          />

          <br />

          <Button
            color="blue"
            fluid
            size="large"
            onClick={async () => await handleSubmit()}
          >
            Buscar
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
