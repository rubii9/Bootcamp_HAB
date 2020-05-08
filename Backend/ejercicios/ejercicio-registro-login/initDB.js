require('dotenv').config();
const bcrypt = require('bcrypt');

const { getConnection } = require('./db');

async function main() {
  const connection = await getConnection();

  console.log('Dropping users table');
  await connection.query(`DROP TABLE IF EXISTS users`);

  console.log('Creating users table');

  await connection.query(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      registrationDate DATETIME NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM("normal", "admin") DEFAULT "normal" NOT NULL,
      active BOOLEAN DEFAULT true NOT NULL
    )
  `);

  console.log('Adding admin user');

  //Hash password before adding to DB <- IMPORTANT!!!!!!!!!111
  const password = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

  await connection.query(`
      INSERT INTO users(registrationDate, email, password, role)
      VALUES(NOW(), "berto@ber.to", "${password}", "admin")
  `);

  connection.release();
  process.exit();
}

main();
