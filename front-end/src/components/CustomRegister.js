import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import SelectOption from "../components/SelectOption"

import "../css/style.css";

const CustomRegister = ({
  formData: {
    nome,
    cargo,
    dataNasc,
    civil,
    sexo,
    endereco,
    bairro,
    cidade,
    cep,
    tel_fixo1,
    tel_fixo2,
    celular,
    contato,
    email,
    identidade,
    cpf,
    possui_veiculo,
    habilitacao,
  },
  onInputChange,
  onHandleSubmit,
}) => (
  <Form size="small">
    <Segment stacked>
      <Header as="h2" color="blue" textAlign="left">
        DADOS PESSOAIS
      </Header>
      <hr />

      <div className="doc-dados-class">
        <Form.Input
          label="Nome Completo *"
          fluid
          width="5"
          placeholder="Ex: Jhonny Gallus"
          value={nome}
          name="nome"
          onChange={(e) => onInputChange(e)}
        />

        <img src="logo192.png" width="80" height="80" alt="Logo do React"/>

        <Form.Input
          label="Cargo Pretendido *"
          fluid
          width="5"
          placeholder="Ex: Engenheiro de Software"
          value={cargo}
          name="cargo"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className="doc-dados-class">
        <Form.Input
          label="Data de Nascimento *"
          fluid
          width="5"
          size="small"
          placeholder="Ex: 12/22/1990"
          value={dataNasc}
          type="date"
          name="dataNasc"
          onChange={(e) => onInputChange(e)}
        />

        <SelectOption
          label="Estado Civil"
          placeholder="Selecione"
          widthClass="label-select-column"
          options={[
            { text: "Selecione", value: "" },
            { text: "Solteiro(a)", value: "Solteiro(a)" },
            { text: "Casado(a)", value: "Casado(a)" }
          ]}
          name="civil"
          onChange={(e) => onInputChange(e)}
        />

        <SelectOption
          label="Sexo"
          placeholder="Selecione"
          widthClass="label-select-column"
          options={[
            { text: "Selecione", value: "" },
            { text: "Masculino", value: "Masculino" },
            { text: "Feminino", value: "Feminino" }
          ]}
          name="sexo"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className="doc-dados-class">
        <Form.Input
          label="Endereço *"
          fluid
          width="5"
          placeholder="Ex: Rua Luzia da Silva, N° 44"
          value={endereco}
          type="text"
          name="endereco"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Bairro *"
          fluid
          width="5"
          placeholder="Ex: São José das Fontes"
          value={bairro}
          type="text"
          name="bairro"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Cidade *"
          fluid
          width="5"
          placeholder="Ex: Lindóia-SP"
          value={cidade}
          type="text"
          name="cidade"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className="doc-dados-class">
        <Form.Input
          label="Cep *"
          fluid
          width="5"
          placeholder="Ex: 13950-000"
          value={cep}
          type="text"
          name="cep"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Telefone Fixo 1"
          fluid
          width="5"
          placeholder="Ex: (19)3898-1514"
          value={tel_fixo1}
          type="text"
          name="tel_fixo1"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Telefone Fixo 2"
          fluid
          width="5"
          placeholder="Ex: (19)3898-1514"
          value={tel_fixo2}
          type="text"
          name="tel_fixo2"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <div className="doc-dados-class">
        <Form.Input
          label="Celular *"
          fluid
          width="5"
          placeholder="Ex: (19)99887-2343"
          value={celular}
          type="text"
          name="celular"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Contato"
          fluid
          width="5"
          placeholder="(19)99765-2233"
          value={contato}
          type="text"
          name="contato"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="Email *"
          fluid
          width="5"
          placeholder="jhonny_gallus@gmail.com"
          value={email}
          type="text"
          name="email"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <Header as="h2" color="blue" textAlign="left">
        DOCUMENTOS
      </Header>
      <hr />

      <div className="doc-dados-class">
        <Form.Input
          label="Identidade *"
          fluid
          width="3"
          placeholder="Ex: 12.435.234-0"
          value={identidade}
          type="text"
          name="identidade"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Input
          label="CPF *"
          fluid
          width="3"
          placeholder="Ex: 324.432.123-23"
          value={cpf}
          type="text"
          name="cpf"
          onChange={(e) => onInputChange(e)}
        />

        <SelectOption
          label="Possui Veículo"
          placeholder="Selecione"
          widthClass="label-select-column-doc"
          options={[
            { text: "Selecione", value: "" },
            { text: "Sim", value: "Sim" },
            { text: "Não", value: "Não" }
          ]}
          name="possui_veiculo"
          onChange={(e) => onInputChange(e)}
        />

        <SelectOption
          label="Habilitação"
          placeholder="Selecione"
          widthClass="label-select-column-doc"
          options={[
            { text: "Selecione", value: "" },
            { text: "A", value: "A" },
            { text: "B", value: "B" },
            { text: "AB", value: "AB" },
            { text: "D", value: "D" },
            { text: "E", value: "E" }
          ]}
          name="habilitacao"
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <Button
        color="blue"
        fluid
        size="large"
        onClick={async () => await onHandleSubmit()}
      >
        Cadastrar
      </Button>
    </Segment>
  </Form>
);

export default CustomRegister;
