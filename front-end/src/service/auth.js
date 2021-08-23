import axios from 'axios';

const url = "http://localhost:3000"

export async function fetchCadastro(candidato) {
  console.log(candidato)
  const newCandidatoUrl = `${url}/candidato/cadastrar`;
  try {
    const response = await axios.post(newCandidatoUrl, candidato);
    const { data: { message } } = response
    alert(message);    
  }catch(error) {
    if (!error.response) return alert("Internal server error! Code: 500");
    const { data } = error.response;

    if (data.message) return alert(data.message)

  }
}

export async function fetchBuscaCandidato(cpf) {
  try {
    const response = await axios.get(`${url}/candidato/buscar/${cpf}`);
    return response;    
  } catch (error) {
    if (!error.response) return alert("Internal server error! Code: 500");
    const { data } = error.response;

    if (data.message) return alert(data.message)
  }
}
