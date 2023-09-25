const db = require("../database/client");

function renderHomePage(req, res) {
  db.query("SELECT * FROM trainer")
    .then(result => {
      const trainers = result.rows;
      res.render("home", { trainers });
    })
    .catch(error => {
      res.status(500).send(error.message); // Si une erreur est affichée sur la home page, c'est qu'il faut compléter la Partie 4 ! 
    });
}


module.exports = {
  renderHomePage
};
