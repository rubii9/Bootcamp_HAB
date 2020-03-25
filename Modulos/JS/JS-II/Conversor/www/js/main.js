'use strict';
const url = 'https://api.exchangerate-api.com/v4/latest/EUR';
const generalUrl = 'https://api.exchangerate-api.com/v4/latest/';
const input = document.querySelector('input#amount');
const coin1 = document.querySelector('select#coin1');
const coin2 = document.querySelector('select#coin2');
const button = document.querySelector('button');
const result = document.querySelector('input#result');

async function getDataFromServer(url) {
  return await (await fetch(url)).json();
}
getDataFromServer(url).then((data) => {
  for (const rate in data.rates) {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.setAttribute('value', rate);
    option2.setAttribute('value', rate);
    option1.text = rate;
    option2.text = rate;
    coin2.append(option2);
    coin1.append(option1);
  }
});

button.addEventListener('click', () => {
  if (input.value) {
    calculate();
  } else {
    input.value = 0;
    calculate();
  }
});

function calculate() {
  const from_currency = coin1.value;
  const to_currency = coin2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
    .then((data) => data.json())
    .then((data) => {
      const rate = data.rates[to_currency];
      result.value = `${input.value} ${coin1.value} son ${(input.value * rate).toFixed(2)} ${coin2.value}`;
    });
}
