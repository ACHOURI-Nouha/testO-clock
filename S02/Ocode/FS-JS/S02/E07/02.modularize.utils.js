const computer = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  truncate: function (x) {
    return Math.floor(x);
  }
};


// -------- PARTIE 1 ---------
// Ajoute dans cet objet-module plusieurs fonctions :

// - `multiply(x, y)` : qui multiplie deux nombres passés en paramètre
// - `divide(x, y)` : qui divisent deux nombres passés en paramètre
//      Attention, si le deuxième argument (diviseur) vaut 0, cette fonction doit retourner 'null'.
// - `round(x)` : qui arrondit le nombre passé en paramètre à l'entier le plus proche
// - `pow(x, p)` : qui passe le nombre passé en premier paramètre à la puissance p


// -------- PARTIE 2 ---------

// Tu as peut-être remarqué que la fonction 'pow' n'est pas encore visible dans le DOM 😿
// Trouve le moyen le plus simple de l'y ajouter.
// Indice : ça se passe quelque part dans `modularize.js`





// /!\ Ne pas supprimer cette ligne (utile pour lancer les tests automatisés)
module.exports = computer; // DO NOT DELETE ME SENPAI *_*
