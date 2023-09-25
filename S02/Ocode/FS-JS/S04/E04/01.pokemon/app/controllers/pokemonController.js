const db = require("../database/client");

async function renderAllPokemonsPage(req, res) {
  const result = await db.query("SELECT * FROM pokemon ORDER BY name ASC");
  const pokemons = result.rows;

  res.render("pokemons", { pokemons });
}

module.exports = {
  renderAllPokemonsPage
};
