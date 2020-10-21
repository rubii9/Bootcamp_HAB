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
    CREATE TABLE photos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date DATETIME NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      image TEXT NOT NULL
    )
  `);

  await db.exec(`
  CREATE TABLE photos_likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    photo_id INTEGER NOT NULL,
    date DATETIME NOT NULL
  )
`);

  console.log('Initial structure created');

  await db.close();
}

main();
