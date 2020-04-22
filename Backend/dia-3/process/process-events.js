let count = 1;

function handleExit() {
  console.log(`\n\nEl proceso se acabó, la cuenta llegó a ${count}`);
}

process.on("exit", handleExit);

process.on("uncaughtException", function (error) {
  console.log("Ocurrió un error grave");
  console.log(error.message);
});

setInterval(function () {
  console.log(`click ${count}`);
  count++;

  if (count === 3) {
    throw new Error("No conozco el número 3");
  }

  if (count > 5) {
    process.exit();
  }
}, 1000);
