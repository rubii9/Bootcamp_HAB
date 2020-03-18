"use strict";

function crono(ammount) {
  let elapsedTime = 0;
  const intervalId = setInterval(() => {
    if (elapsedTime > ammount) {
      console.log("RING RING");
      clearInterval(intervalId);
    } else {
      console.log(`Seconds elapsed ${elapsedTime}`);
      elapsedTime++;
    }
  }, 1000);
}

crono(5);
