const { Client } = require("pg");

const client = new Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "pokemon",
  user: process.env.DB_USER || "pokemon",
  password: process.env.DB_PASSWORD || "pokepass"
});

client.connect();

module.exports = client;
