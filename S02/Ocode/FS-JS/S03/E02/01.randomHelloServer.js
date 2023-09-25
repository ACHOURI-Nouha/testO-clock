// Objectif : créer un server qui répond "Bonjour" dans une language aléatoire !

// Etape 1 : créer un tableau contenant "Bonjour" écrit dans 4 langues différentes.

// Etape 2 : définir un serveur http & écouter les requêtes sur le port 3000. 

// Etape 3 : tester que le serveur reçoit bien les requêtes. Pensez au console.log !
// Pour lancer le serveur, utiliser `node <chemin_vers_ce_fichier.js>`

// Etape 3 : lors d'un appel HTTP sur le serveur, celui-ci doit répondre "Bonjour" dans l'une des langues définie précédemment. 
// Aide :
// - écrire une fonction qui génère un nombre aléatoire entre 'min' (inclu) et 'max' (exclu)
// - lors d'un appel HTTP, utiliser cette fonction pour générer un nombre aléatoire entre 0 et la taille du tableau
// - utiliser ce nombre comme index pour l'un des textes du tableau, et le renvoyer au client. 

// Bonus (renvoyer du HTML)
// Ne pas renvoyer le texte brut, mais plutôt dans une balise `h1`.
// Pour cela, il faudra ajouter un header à la réponse pour préciser (au client) que le contenu renvoyé est de type 'text/html'
// Cette documentation peut aider : https://nodejs.org/api/http.html#requestsetheadername-value
// Ainsi que les différentes valeurs possibles pour le header 'Content-Type' : https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
