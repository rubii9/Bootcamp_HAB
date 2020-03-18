"use strict";

const accountRequest = new Promise((resolve, reject) => {
  resolve(10000);
});
const carRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7000);
  }, Math.random() * 1000 + 4000);
});

const promiseArray = [accountRequest, carRequest];
const promiseRace = Promise.race(promiseArray);
Promise.all(promiseArray).then(alldata => {
  if (alldata[0] > alldata[1]) {
    console.log("COMPRA!");
  } else {
    console.log("ESPERA");
  }
});
promiseRace.then(value => {
  console.log(value);
});
