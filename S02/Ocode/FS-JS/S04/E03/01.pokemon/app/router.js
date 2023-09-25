const { Router } = require("express");
const mainController = require("./controllers/mainController");
const pokemonController = require("./controllers/pokemonController");

const router = new Router();

router.get("/", mainController.renderHomePage);
router.get("/pokemons", pokemonController.renderAllPokemonsPage);

module.exports = router;
