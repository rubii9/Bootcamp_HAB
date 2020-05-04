const { getDB, resetDB } = require('./db');
const { formatDateToDB } = require('./helpers');

async function main() {
  // Delete db if exists
  // USE WITH CAUTION
  try {
    await resetDB();
  } catch (error) {
    console.log('The database does not exists yet');
  }

  // Get reference to db
  const db = await getDB();

  // Create table
  await db.exec(`
    CREATE TABLE diary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date DATETIME,
      description TEXT,
      place TEXT,
      image TEXT
    )
  `);

  // Add example initial data
  await db.exec(`
    INSERT INTO diary (date, description, place, image) 
    VALUES ("${formatDateToDB(
      new Date()
    )}", "Bonito sitio", "A Coruña", "coruna.jpg")
  `);

  await db.exec(`
    INSERT INTO diary (date, description, place, image) 
    VALUES ("${formatDateToDB(
      new Date()
    )}", "Otra visita muy guai", "O Vicedo", "vicedo.png")
  `);

  console.log('Initial data created');

  await db.close();
}

main();
