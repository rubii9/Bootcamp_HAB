'use strict';

/**
 * Operadores lógicos:
 *
 *   - `>`    ... mayor que ...
 *
 *   - `<`    ... menor que ...
 *
 *   - `>=`   ... mayor o igual que...
 *
 *   - `<=`   ... menor o igual que ...
 *
 *   - `===`  ... igual que ...
 *
 *   - `!==`  ... distinto de ...
 *
 */

const a = 4;

const b = 7;

console.log(2 < 7);

/**
 * Preferencia de los operadores.
 *
 * Cuando tratamos con operadores debemos tener en cuenta que
 * una multiplicación o una división siempre irá antes que una
 * suma o una resta.
 *
 * Si deseamos asegurarnos de que un tipo de operación en concreto
 * sea realizada antes que otra podemos hacer uso de paréntisis.
 *
 * Ejemplo: `(2 + 3 + 5) / 3`
 *
 * De esta manera la suma irá en primer lugar y finalmente se
 * realizará la división.
 *
 */
