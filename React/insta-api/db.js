require('dotenv').config();

const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const path = require('path');
const fs = require('fs').promises;

const dbPath = path.join(__dirname, process.env.DB_NAME);

// Devuelve una referencia a la base de datos
async function getDB() {
  return open({
    filename: dbPath,
    driver: sqlite3.cached.Database
  });
}

// Borra la base de datos
async function resetDB() {
  await fs.unlink(dbPath);
}

module.exports = {
  getDB,
  resetDB
};
