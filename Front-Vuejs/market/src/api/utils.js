import axios from "axios";
import jwt from "jwt-decode";

const ENDPOINT = "http://localhost:3050";
const AUTH_TOKEN_KEY = "authToken";
const ROLE = "role";

//FUNCION LOGIN
export function loginUser(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${ENDPOINT}/auth`, //URL DE LA AUTENTICACIÓN
        method: "POST", //MÉTODO DE LA AUTENTIFICACIÓN
        data: {
          usuario: email,
          password: password,
          grand_type: "password",
        }, // DATOS DE LA AUTENTIFICACIÓN
      });
      setAuthToken(res.data.token);
      setIsAdmin(res.data.isAdmin);
      resolve();
    } catch (err) {
      if (err.response.status === 404) {
        alert(err.response.data.message);
      }

      console.log("Error en login: ", err);
    }
  });
}

//LOGOUT
export function clearLogin() {
  axios.defaults.headers.common[':authorization'] = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem("Usuario");
  clearAdmin();
}

// ========================= TOKEN =====================

//GUARDAR TOKEN EN LOCALSTORAGE
export function setAuthToken(token) {
  axios.defaults.headers.common[':authorization'] = Bearer ${token}
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

//COGER EL TOKEN
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

//CONSIGUIENDO FECHA DE CADUCIDAD DEL TOKEN
export function getTokenExpirationDate(encodedToken) {
  let token = jwt(encodedToken);
  //si no hay, no sigue
  if (!token.exp) {
    return null;
  }
  let date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

//COMPROBANDO SI LA FECHA SIGUE VIGENTE O NO
export function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

//COMPROBAR SI EL USER ESTÁ LOGEADO O NO
export function isLoggedIn() {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
}

// ========================= ROL USUARIO =====================

//GUARDAR SI ES ADMIN EN LOCAL STORAGE
export function setIsAdmin(isAdmin) {
  localStorage.setItem(ROLE, isAdmin);
}

//BORRAR ROL DEL USER EN LOCAL STORAGE
export function clearAdmin() {
  return localStorage.removeItem(ROLE);
}

// RECUPERAR ROL DESDE LOCAL STORAGE
export function getIsAdmin() {
  return localStorage.getItem(ROLE);
}

//COMPROBAR ROL
export function checkAdmin() {
  let role = false;
  let isAdmin = getIsAdmin();
  if (isAdmin === "true") {
    role = true;
  } else {
    role = false;
  }
  return role;
}
