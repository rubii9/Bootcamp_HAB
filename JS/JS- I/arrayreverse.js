"use strict";
const data = [9, 8, 7, 6];
const result = [];

for (let i = 0; i < data.length; i++) {
  result.unshift(data[i]);
}
console.log(data, result);
