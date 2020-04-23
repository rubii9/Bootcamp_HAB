const os = require("os");

// Memoria total del sistema:
console.log(os.totalmem());

// Memoria libre
console.log(os.freemem());

// Hostname
console.log(os.hostname());

// Directorio personal
console.log(os.homedir());

// Directorio temporal
console.log(os.tmpdir());

// Uptime
console.log(os.uptime());
