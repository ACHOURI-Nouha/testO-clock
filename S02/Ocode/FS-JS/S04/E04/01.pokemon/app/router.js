const { Router } = require("express");
const adminController = require("./controllers/adminController");
const mainController = require("./controllers/mainController");
const pokemonController = require("./controllers/pokemonController");

const router = new Router();

router.get("/", mainController.renderHomePage);
router.get("/pokemons", pokemonController.renderAllPokemonsPage);
router.get("/admin/logs", adminController.renderLogsPage);

module.exports = router;
