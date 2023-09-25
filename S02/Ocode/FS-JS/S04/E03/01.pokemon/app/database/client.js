const { Client } = require("pg");

const client = new Client({
  // TODO: Partie 4 - Connexion à la base de données pokemon
});

client.connect();

module.exports = client;
