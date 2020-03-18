'use strict';

function isPrime(numberToTest) {
//recorrer el bucle sin llegar al numberToTest
//Comprobamos que no hay ningun numero divisible sin ser el propio número
  for (let i = 2; i < numberToTest; i++) {
    if (numberToTest % i === 0) {
      return false;
    }
  }
  return true;
}

function showNumbers(numberToTest) {
  for (let i = 2; i <= numberToTest; i++) {
    if (isPrime(i) === true) {
      console.log(`El número ${i} es primo`);
    }
  }
}

function showNumbersInverse(numberToTest) {
  for (let i = numberToTest; i > 1; i--) {
    if (isPrime(i) === true) {
      console.log(`El número ${i} es primo`);
    }
  }
}
console.log('Numeros primos:');
showNumbers(50);
console.log('Modo inverso:');
showNumbersInverse(50);
