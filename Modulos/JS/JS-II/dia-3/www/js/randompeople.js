"use strict";

// Función asíncrona que cargue los datos de la api de randomusser.
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

// Función que recoja los datos y genere un ul de personas
function buildUserList(userListData) {
  const userList = document.createElement("ul");

  //Para cada usuario(userData) recorremos el JSON userListData
  for (const userData of userListData) {
    //creamos cada usuario (li) y lo aññadimos al ul
    const user = buildUser(userData);
    userList.append(user);
  }
  return userList;
}

// Función que genere un li de persona
function buildUser(userData) {
  const userLi = document.createElement("li");
  const sectionUser = document.createElement("section");

  //añadimos la seccionUser al li
  sectionUser.classList.add("user");
  userLi.append(sectionUser);

  //Crear elementos de la seccion

  const fotoUser = document.createElement("img");
  const name = document.createElement("h1");
  const correo = document.createElement("p");
  const dataUser = document.createElement("p");

  //Obtener datos del userData

  const { first, last } = userData.name;
  const email = userData.email;
  const date = userData.dob.date.slice(0, 10);
  const foto = userData.picture.medium;

  //Añadir los datos a los elementos creados

  name.textContent = `${first} ${last}`;
  correo.textContent = email;
  dataUser.textContent = date;
  fotoUser.setAttribute("src", foto);

  sectionUser.append(fotoUser, name, correo, dataUser);

  return userLi;
}

// URL para la API
const API_URL = "https://randomuser.me/api/?results=10";

// Elemento donde va la lista
const root = document.querySelector("#root");

getData(API_URL)
  .then(data => {
    const userList = buildUserList(data.results);
    root.append(userList);
  })
  .catch(error => console.error(error));
