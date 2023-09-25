// Créer un serveur http 
// - qui écoute sur le port 3000
// - qui répond aux appels à la route `/N` (où N est un nombre supérieur ou égal à 0) avec la réponse suivante : à la spécification suivante : 
//   `Le nombre N est (im)pair.`

// Exemple :
// - un appel sur `http://localhost:3000/8` répondra "Le nombre 8 est pair."
// - un appel sur `http://localhost:3000/11` répondra "Le nombre 11 est impair."

// Aide :
// - Implémenter la méthode `isOdd` dans le fichier `01.isOdd.js`, l'exporter, puis l'importer depuis ce fichier.
// - Créer ensuite le serveur, et écouter sur le port 3000.
// - Récupérer l'URL de la requête pour récupérer N, puis le parser comme un 'number'. 
// - Renvoyer enfin une réponse adaptée au client selon la valeur de N.
