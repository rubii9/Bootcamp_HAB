// Globales
// console.log(new Date());
// console.log(__filename);

// PID del proceso
console.log(process.pid);

setInterval(() => {
  console.log(process.pid);
}, 500);

// Version
console.log(process.version);

// Platform
console.log(process.platform);

process.title = "Mi web app";
