import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client({
  user: "intro_owner",
  password: "npg_Q2StsqLru4Ff",
  host: "ep-green-snowflake-a4x16b4u-pooler.us-east-1.aws.neon.tech",
  database: "intro",
  port: 5432,
  ssl: true,
});


(async () => {
  try {
    await pgClient.connect();
    console.log("Connected to DB");
  } catch (err) {
    console.error("DB connection error", err);
  }
})();

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const { city, country, street, pincode } = req.body;
  try {

    await pgClient.query("BEGIN");
    const insertquery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id`;
    const insertresult = await pgClient.query(insertquery, [username, password, email]);
    const user_id = insertresult.rows[0].id;

    const addressinsertquery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`
    const addressinsertqueryresult = await pgClient.query(addressinsertquery, [city, country, street, pincode, user_id]);

    await pgClient.query("COMMIT");

    res.status(200).json({
      message: "success"
    });
  } catch (err) {
    await pgClient.query("ROLLBACK");
    res.status(500).json(err);
  }
})


app.listen(3000, () => {
  console.log("server started");
});


