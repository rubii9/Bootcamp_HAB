const { getDB, resetDB } = require('./db');

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
      date DATETIME NOT NULL,
      description TEXT NOT NULL,
      place TEXT NOT NULL,
      image TEXT
    )
  `);

  await db.exec(`
    CREATE TABLE diary_votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      entry_id INTEGER NOT NULL,
      vote INTEGER NOT NULL,
      date DATETIME NOT NULL,
      ip TEXT NOT NULL
    )
  `);

  console.log('Initial structure created');

  await db.close();
}

main();
