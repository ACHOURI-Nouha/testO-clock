// Voici du code fonctionnel.
// Mais fonctionnel ne veut pas dire propre !
// Comme tu peux le constater, il y a du rouge un peu partout dans le fichier !

// Si tu ne vois pas de rouge, c'est le moment d'installer l'extension 'ESLint' de VSCode, de redémarrer VSCode et de l'ouvrir à la racine du repo.
//      Toujours pas ? Réinstalle les dépendances du projet via `npm install` à la racine du repo.

// Si tu vois du rouge, très bien, c'est l'occasion de lire les messages d'erreurs associés (en survolant ces lignes rouges) et les corriger en conséquence.


// ETAPE 1 - corriger les erreurs ESLint

var truc = document.querySelector("button");
truc.addEventListener("click", function (event) {
    var machin = document.querySelector("p");
    machin.textContent = buildNewButtonText(); // this line changes the text of the button
});


function buildNewButtonText() {
  return ("🙈 Oh non, je suis démasqué ! 🙈");
  console.log("J'ai un doute sur l'utilité de cette ligne...");
}


// ETAPE 2 - refactor

// Bon, tout de même... 'truc' et 'machin' c'est pas dingue comme nom de variable ! Comment les renommer ?
// Vérifie toute de même que le code n'est pas cassé dans ton navigateur :)


// ETAPE 3 - nouvelle règle ESLint

// Bon, le mot clé 'var' pour définir une variable, c'est soooo 2010.
// Et si on ajoutait une règle dans la config ESLint du projet afin que notre IDE (ie. VSCode)
// nous préviennent lorsqu'on utilise 'var' ?

// Pour cela, il y a un fichier .eslintrc juste à côté de ce fichier.
// A l'aide de Google et la doc ESLint, trouve la règle qu'il faut rajouter à ce fichier de config pour obtenir ce resultat.
// A présent, lorsque tu tape 'var', tu devrais aussi avoir une erreur ! Bien joué !
