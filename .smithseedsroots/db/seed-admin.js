import Database from "better-sqlite3";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const db = new Database(process.env.DB_PATH);

const hash = bcrypt.hashSync("admin123", 12);

db.prepare(`
  INSERT OR IGNORE INTO users (email, password_hash, role)
  VALUES (?, ?, 'admin')
`).run(process.env.ADMIN_EMAIL, hash);

console.log("Admin user seeded");