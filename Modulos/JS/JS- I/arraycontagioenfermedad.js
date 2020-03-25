"use strict";
const enfermos = [true, false, true, false, false, false, true, true];
const day1 = [...enfermos];

function infection(day, enfermos) {
  for (let i = 0; i < enfermos.length; i++) {
    if (enfermos[i]) {
      if (i > 0 && !day[i - 1]) {
        day[i - 1] = true;
      }
      if (i !== enfermos.length - 1 && !day[i + 1]) {
        day[i + 1] = true;
      }
    }
    for (let i = 0; i < enfermos.length; i++) {
      if (enfermos[i]) {
        day[i] = false;
      }
    }
  }

  return day;
}
console.log(enfermos);
console.log(infection(day1, enfermos));

