'use strict';
//Creación de las funciones
function add(term1, term2) {
  let result;
  result = parseInt(term1) + parseInt(term2);
  return result;
}

function subtract(term1, term2) {
  let result;
  result = parseInt(term1) - parseInt(term2);
  return result;
}

function multiply(term1, term2) {
  let result;
  result = parseInt(term1) * parseInt(term2);
  return result;
}

function divide(term1, term2) {
  let result;
  result = parseInt(term1) / parseInt(term2);
  return result;
}

function power(term1, term2) {
  let result;
  result = Math.pow(parseInt(term1), parseInt(term2));
  return result;
}

//Programa principal

var salida;

do {
  var calc = prompt(`Choose function:
1-add
2-subtract
3-multiply
4-divide 
5-power
6-exit `);

  if (calc === '1' || calc === '2' || calc === '3' || calc === '4' || calc === '5') {
    var num1 = prompt('Number 1 value?');
    var num2 = prompt('Number 2 value?');
  }

  if (calc === '1') {
    console.log('Add result = ', add(num1, num2));
  } else if (calc === '2') {
    console.log('Subtract result = ', subtract(num1, num2));
  } else if (calc === '3') {
    console.log('Multiply result = ', multiply(num1, num2));
  } else if (calc === '4') {
    console.log('Divide result = ', divide(num1, num2));
  } else if (calc === '5') {
    console.log('Power result = ', power(num1, num2));
  } else if (calc === '6') {
    console.log('You have chosen exit');
    salida = true;
  } else {
    console.log('Function not found');
  }

  switch (calc) {
    case '1':
      console.log('Add result = ', add(num1, num2));
      break;
    case '2':
      console.log('Subtract result = ', subtract(num1, num2));
      break;
    case '3':
      console.log('Multiply result = ', multiply(num1, num2));
      break;
    case '4':
      console.log('Divide result = ', divide(num1, num2));
      break;
    case '5':
      console.log('Power result = ', power(num1, num2));
      break;
    case '6':
      console.log('You have chosen exit');
      salida = true;
      break;
    default:
      console.log('Function not found');
      break;
  }
} while (salida !== true);
