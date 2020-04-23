let count = 0;
setInterval(() => console.log(++count), 500);

process.on("SIGINT", function () {
  if (count > 10) {
    console.log("Vale chao");
    process.exit();
  } else {
    console.log("Espera a chegara a 10 fai o favor");
  }
});
