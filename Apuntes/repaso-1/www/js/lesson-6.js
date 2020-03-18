'use strict';

// Usaremos este array en la mayoría de ejemplos, no lo comentes.
const names = ['Vanesa', 'Roberto', 'Berto', 'Sara', 'Laura', 'Jorge', 'Laura'];

/**
 * Un `array` es una colección ordenada de datos. Los arrays
 * se emplean para almacenar multiples valores en una sola variable.
 *
 * Cada item en un array tiene un número al que está asociado,
 * llamado "índice numérico" (numeric index), que permite acceder
 * a él.
 *
 * En JavaScript, los arrays comienzan a partir del índice cero
 * y pueden ser manipulados con varios métodos.
 */

// console.log(names[0]);

// names[0] = 'Iván';

// console.log(names[0]);

/**
 *
 * `array.length` Nos devuelve la longitud de un array.
 *
 */

// console.log(names.length);

/**
 *
 * `array.push(item)` Introduce un elemento al final del array.
 *
 */

// names.push('Rocío')

// console.log(names);

/**
 *
 * `array.pop()` Elimina el último elemento del array.
 *
 */

// const getLastIndexOfAnArray = names.pop();

// console.log(getLastIndexOfAnArray);

// console.log(names);

/**
 *
 * `array.unshift(item)` Introduce un elemento al inicio del array.
 *
 */

// names.unshift('Eustaquio');

// console.log(names);

/**
 *
 * `array.shift()` Elimina el primer elemento del array.
 *
 */

// const getFirstIndexOfAnArray = names.shift();

// console.log(getFirstIndexOfAnArray);

// console.log(names);

/**
 *
 * `array.indexOf('Laura')` Devuelve el índice de un elemento del array.
 *
 * `array.splice (index, 1)` Elimina un elemento del array.
 *
 */

// const getIndexOfLaura = names.indexOf('Laura');

// names.splice(getIndexOfLaura, 1);

// console.log(names);

// const getIndexOfRoberto = names.indexOf('Roberto');

// names.splice(getIndexOfRoberto, 3);

// console.log(names);

/**
 * Otros métodos de interés:
 *
 * `string.split('')` El método split() divide un objeto de tipo String en un array de cadenas
 *                    mediante la separación de la cadena en subcadenas.
 *
 * `string.join('')`  El método join() une todos los elementos de una matriz (o un objeto similar a una matriz)
 *                    en una cadena.
 *
 */

// const hour = '12:30';

// console.log(hour.split(':'));

// const myWord = 'Abracadabra';

// console.log(myWord.split(''));

// const arrayOfLetters = ['H', 'e', 'l', 'l', 'o', '!'];

// console.log(arrayOfLetters.join(''));