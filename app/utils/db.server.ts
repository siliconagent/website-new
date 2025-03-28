// db.server.ts
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'siliconagent',
};

let pool: mysql.Pool;

async function getDb() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

export { getDb };
