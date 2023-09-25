/* 

Pour lancer ce serveur express :
- Retourner à la racine du dossier Ocode: `cd {{CHEMIN_VERS_OCODE}}/Ocode`
- Installer les dependances manquantes: `npm install`
- `npx nodemon FS-JS/S04/E01/03.environment.js` (`npx` ira chercher `nodemon` dans les `node_modules`)


Attention : exercice exploratoire.
2-3 lignes de code suffisent, mais il faut les trouver. 


Énoncé de l'exercice :
- Utiliser `dotenv` (https://www.npmjs.com/package/dotenv) pour charger le fichier d'environment `01.env` dans ce fichier.
- Y définir (dans `01.env`) une variable `PORT` avec pour valeur `4100`.
- Vérifier que votre serveur se lance bien sûr le port 4100. 


- Attention : puisque le fichier ne s'appelle plus `.env` mais bien `01.env`, il va falloir bien lire la doc !
- Attention : il faudra préciser le chemin ABSOLU et non pas RELATIF (kesako ? à vous de chercher !)
- Note : vous pouvez vous servir du module `path` si vous le souhaitez, c'est un classique.

*/

const express = require("express");
const app = express();

const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  res.send(`You reached the ${req.url} route on the port ${port}`);
});

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});

// Do not delete this export. It's used for automated tests.
module.exports = app;
