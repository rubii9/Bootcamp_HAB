console.log("lets go 🚀");

import {
  emptyList,
  addToList,
  getData,
  buildEntry,
  BACKEND_URL,
} from "./helpers.js";

// Envío de nueva entrada
const newEntryForm = document.querySelector("#entry-new");

newEntryForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const payload = new FormData(newEntryForm);

  const request = await fetch(`${BACKEND_URL}/entries`, {
    method: "POST",
    body: payload,
  });

  const response = await request.json();

  addToList([response.data]);
});

// Filtrado de listado
const searchField = document.querySelector("#entry-search");

searchField.addEventListener("input", async function (event) {
  const search = event.target.value;
  let entries;

  if (search.length > 2) {
    entries = await getData(`${BACKEND_URL}/entries?search=${search}`);
  } else {
    entries = await getData(`${BACKEND_URL}/entries`);
  }

  emptyList();

  addToList(entries.data);
});

// Carga inicial
async function main() {
  const entries = await getData(`${BACKEND_URL}/entries`);

  addToList(entries.data);
}

main();
