import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import CustomMessage from "../components/CustomMessage";
import CustomRegister from "../components/CustomRegister";
import CustomHeader from "../components/CustomHeader";
import { fetchCadastro } from "../service/auth";

export default function Cadastro() {
  const [formData, setFormData] = useState(new Map());

  const handleSubmit = async () => {
    const candidato = {};
    formData.forEach((value, key) => (candidato[key] = value));
    await fetchCadastro(candidato);
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => {
      return new Map(prevState).set(name, value);
    });
  }, []);

  return (
    <div>
      <CustomMessage>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/cadastro" style={{ fontSize: 16 }}>
            Cadastre-se para vagas de emprego!
          </Link>
          <Link to="/candidato" style={{ fontSize: 16 }}>
            Consultar candidato pelo CPF?
          </Link>
        </div>
      </CustomMessage>
      <CustomHeader message="PRÉVIA DO FORMULÁRIO" />
      <CustomRegister
        formData={formData}
        onInputChange={handleInputChange}
        onHandleSubmit={handleSubmit}
      />
    </div>
  );
}
