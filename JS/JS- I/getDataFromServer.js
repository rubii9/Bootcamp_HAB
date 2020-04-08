"use strict";

const dogUrl = "https://dog.ceo/api/breeds/list/all";

async function getDataFromServer(url) {
  return await (await fetch(url)).json();
}
getDataFromServer("https://dog.ceo/api/breeds/list/all").then(data => {
  console.log(data);
});
