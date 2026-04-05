import express from "express";
import Database from "better-sqlite3";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const db = new Database(process.env.DB_PATH);

app.use(express.json());

// IP allow-list policy (workspace rulemaking)
app.use((req, res, next) => {
  const clientIp = req.ip.replace("::ffff:", "");
  if (clientIp !== process.env.ALLOWED_CLIENT_IP) {
    return res.status(403).json({ error: "IP not authorized" });
  }
  next();
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = db.prepare(
    "SELECT * FROM users WHERE email = ? AND active = 1"
  ).get(email);

  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ status: "authenticated", role: user.role });
});

app.get("/products", (req, res) => {
  const products = db.prepare(
    "SELECT * FROM products WHERE active = 1"
  ).all();

  res.json(products);
});

app.listen(3001, () => {
  console.log("Workspace DB server running on localhost:3001");
});