"use strict";

/* ccede con fetch a la información de la siguiente API:
 https://api.exchangerate-api.com/v4/latest/EUR. 
Dado un valor en euros (EUR), 
convierte dicha cantidad a dólares (USD). 
Por último convierte esta cantidad en dólares a yenes (JPY). */

const url1 = "https://api.exchangerate-api.com/v4/latest/EUR";
const url2 = "https://api.exchangerate-api.com/v4/latest/USD";

async function getDataFromServer(url) {
  return await (await fetch(url)).json();
}
getDataFromServer(url1).then(data => {
  const euroAmmount = 10;
  const euro_dorllar = data.rates.USD;
  const dollarAmmount = euro_dorllar * euroAmmount;
  console.log(`${euroAmmount} € son ${dollarAmmount} $`);

  getDataFromServer(url2).then(data => {
    const dollar_yens = data.rates.JPY;
    const yensAmmounts = dollar_yens * dollarAmmount;
    console.log(`${dollarAmmount} $ son ${yensAmmounts} ¥`);
  });
});
