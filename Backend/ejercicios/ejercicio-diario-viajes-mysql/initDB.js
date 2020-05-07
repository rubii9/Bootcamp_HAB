const { getConnection } = require('./db');
const { formatDateToDB } = require('./helpers');
const faker = require('faker/locale/es');

const { random } = require('lodash');

const args = process.argv;

const addData = args[2] === '--data';

async function main() {
  // Get reference to db
  const connection = await getConnection();

  console.log('Dropping tables');
  await connection.query('DROP TABLE IF EXISTS diary');
  await connection.query('DROP TABLE IF EXISTS diary_votes');

  // Create table
  await connection.query(`
    CREATE TABLE diary (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      date DATETIME NOT NULL,
      description TEXT NOT NULL,
      place TEXT NOT NULL,
      image TEXT
    )
  `);

  await connection.query(`
    CREATE TABLE diary_votes (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      entry_id INTEGER NOT NULL,
      vote INTEGER NOT NULL,
      date DATETIME NOT NULL,
      ip TEXT NOT NULL
    )
  `);

  if (addData) {
    console.log('Adding initial data');
    const entries = 10;

    for (let index = 0; index < entries; index++) {
      await connection.query(`
      INSERT INTO diary (date, description, place) 
      VALUES ("${formatDateToDB(
        faker.date.recent()
      )}", "${faker.lorem.sentence()}", "${faker.address.city()}")
    `);
    }

    const votes = 100;

    for (let index = 0; index < votes; index++) {
      await connection.query(`
      INSERT INTO diary_votes (entry_id, vote, date, ip) 
      VALUES ("${random(1, entries)}", "${random(1, 5)}", "${formatDateToDB(
        faker.date.recent()
      )}", "${faker.internet.ip()}")
      `);
    }
  }

  console.log('Initial structure created');

  connection.release();
  process.exit();
}

main();
