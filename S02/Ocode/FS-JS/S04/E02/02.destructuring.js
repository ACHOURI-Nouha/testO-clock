/*

L'objectif de cet exercice est d'apprivoiser les méthodes de destructuring
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

La _destructuration_ peut s'applique aussi bien sur les tableaux (array) que sur les objets (objects)

Syntaxe :

1. Array

    const first = someArray[0];
    const second = someArray[1];
    const third = someArray[2];

    est remplacé par

    const [first, second, third] = someArray;

2. Object

    const user = {
      firstName: 'James',
      lastName: 'Bond',
      codeNumber: '007',
    };

    const firstName = user.firstName;
    const lastName = user.lastName;
    const codeNumber = user.codeNumber;

    est remplacé par

    const { firstName, lastName, codeNumber } = user;


BON COURAGE !

*/ // -------------------------------------------------------------------------





// ------------------------
// ------ EXERCICE 1 ------
// ------------------------
/**
 * Écrire une fonction nommée `helloLike007()` qui prend un objet en argument
 * et qui retourne un bonjour "à la James Bond".
 * On utilisera la destructuration d'objet et les "template strings" (`${myVar}`)
 *
 * @param {Object} person
 * @param {string} person.firstName
 * @param {string} person.lastName
 * @returns {string}
 * @example
 * console.log(helloLike007({ firstName: 'James', lastName: 'Bond' })); // output: « Je suis Bond, James Bond ! »
 */




// ------------------------
// ------ EXERCICE 2 ------
// ------------------------
/**
 * Écrire une fonction nommée `calculateSalesTotals()` qui prend un tableau (tableau d'objets)
 * en argument et qui retourne un nouveau tableau (array).
 * Ce tableau est le tableau original avec 2 nouvelles propriétés dans chaque objet :
 *   - salePrice : le prix vendu = prix - remise
 *   - total : le chiffre d'affaire réalisé sur un objet (prix vendu * nombre de ventes)
 *
 * @param {Object[]} sales
 * @param {string} sales[].product Le nom du produit
 * @param {number} sales[].price Le prix de base du produit
 * @param {number} sales[].nbSales Le nombre de ventes pour ce produit
 * @param {number} [sales[].discount] Le pourcentage de la remise (format decimal) - Optionnel
 *
 * @example
 *  // input:
 *  const sales = [
 *    { product: 'PS4', price: 399.99, nbSales: 3 },
 *    { product: 'Nintendo Switch', price: 299.99, nbSales: 4 },
 *    { product: 'PS3 Console', price: 299.99, nbSales: 1, discount: 0.8 },
 *    { product: 'Nintendo 64', price: 199.99, nbSales: 2, discount: 0.65 },
 *  ];
 *
 *  // output
 *  const computedSales = [
 *    { product: 'PS4', price: 399.99, nbSales: 3, salePrice: 399.99, total: 1199.97 },
 *    { product: 'Nintendo Switch', price: 299.99, nbSales: 4, salePrice: 299.99, total: 1199.96 },
 *    { product: 'PS3 Console', price: 299.99, nbSales: 1, discount: 0.8, salePrice: 59.998, total: 59.998 },
 *    { product: 'Nintendo 64', price: 199.99, nbSales: 2, discount: 0.65, salePrice: 69.9965, total: 139.993 },
 *  ];
 */
// TIPS:
// 1. pour ajouter les 2 colonnes à chaque objet de notre tableau, utiliser `Array.map()`
//    voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//    s'entrainer sur Ocode S04E01/02.array.js
//
// 2. chercher à savoir comment attribuer une valeur par défaut lors de la destructuration
//    (pour discount qui est optionnel ;) )




// ------------------------
// ------ EXERCICE 3 ------
// ------------------------
/**
 * Destructurer un tableau et assigner deux éléments (index 0 et 2) dans des variables
 * `firstFruit` et `thirdFruit`
 */
const fruits = ["apple", "banana", "cherry", "date", "grape", "kiwi"];

// Expected :
console.log(firstFruit); // 'apple'
console.log(thirdFruit); // 'cherry'




// ------------------------
// ------ EXERCICE 4 ------
// ------------------------
/**
 * Destructurer un tableau et assigner les deux premiers éléments dans des variables
 * `firstColor` et `secondColor` et le reste dans une troisième variable `otherColors`
 *
 * Tip : voir le "Rest operator"
 */
const colors = ["white", "blue", "yellow", "black", "red", "green"];

// Expected :
console.log(firstColor); // 'white'
console.log(secondColor); // 'blue'
console.log(otherColors); // ['yellow', 'black', 'red', 'green']



// -------------------------------------------------------------------

// DO NOT REMOVE THIS EXPORT, IT IS USED FOR TEST PURPOSES.
// RUN TEST WITH `npm run test S04 E02 02` from projet root directory

module.exports = {
  helloLike007,
  calculateSalesTotals,
};

