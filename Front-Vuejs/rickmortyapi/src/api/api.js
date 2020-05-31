//INDICANDO USO DE AXIOS PARA LA API
const axios = require("axios").default;
//BASE URL DE LA API
const apiUrl = "https://rickandmortyapi.com/api";

//FUNCIÓN PARA COGER TODOS LOS CHARS
function getAll() {
  return axios.get(`${apiUrl}/character`);
}

function getChar(id) {
  return axios.get(`${apiUrl}/character/` + id);
}
export default {
  getAll,
  getChar,
};
