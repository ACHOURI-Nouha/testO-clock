/*
 
L'objectif de cet exercice est d'apprivoiser les méthodes disponibles sur les Array : 
    https:developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
 
On privilégiera toujours une de ces méthodes à l'utilisation d'une boucle.
 
A notre disposition :
    .filter
    .find
    .map
    .includes
    MAIS PLUS ENCORE :yeah:


BON COURAGE ! 

*/ // -------------------------------------------------------------------------





// ------------------------
// ------ EXERCICE 1 ------
// ------------------------

/**
 * @param {Array<number>} numbers
 * @returns {Array<number>} returns the array passed as argument but with all odd numbers filtered out.
 * @example removeOddNumbers([12, 13, 1, 0, -1, 2]); // should return [12, 0, 2]
 */
function removeOddNumbers(numbers) {
  // TODO: implement this function
}



// ------------------------
// ------ EXERCICE 2 ------
// ------------------------

/**
 * @param {string} color 
 * @returns returns only flowers that have the requested color
 * @example filterFlowers("red"); // should returns [{ name: "rose", color: "red" }, { name: "poppy", color: "red" }]
 * @example filterFlowers("blue"); // should returns []
 */
function filterFlowers(color) {
  const flowers = [{ // Do not modify this array directly ;-)
    name: "rose",
    color: "red",
  }, {
    name: "orchidee",
    color: "white",
  }, {
    name: "peony",
    color: "white",
  }, {
    name: "lilac",
    color: "purple",
  }, {
    name: "poppy",
    color: "red",
  }, {
    name: "daisy",
    color: "white",
  }];

  // TODO: implement this function 
}



// ------------------------
// ------ EXERCICE 3 ------
// ------------------------

/**
 * @param {string} name 
 * @returns the flower with the matching name. Case insentitive.
 * @example flower("Lilac"); // should return { name: "lilac", color: "purple" }
 * @example flower("pizza"); // should return undefined
 */
function findFlower(name) {
  const flowers = [{ // Do not modify this array directly ;-)
    name: "rose",
    color: "red",
  }, {
    name: "orchidee",
    color: "white",
  }, {
    name: "peony",
    color: "white",
  }, {
    name: "lilac",
    color: "purple",
  }, {
    name: "poppy",
    color: "red",
  }, {
    name: "daisy",
    color: "white",
  }];

  // TODO: implement this function 
}



// ------------------------
// ------ EXERCICE 4 ------
// ------------------------

/**
 * @param {Array<number>} numbers 
 * @returns {Array<number>} return the square of each number in numbers
 * @example computeSquares([0, 3, 4, 5]); // should return [0, 9, 16, 25]
 */
function computeSquares(numbers) {
  // TODO: implement this function
}



// ------------------------
// ------ EXERCICE 5 ------
// ------------------------

/**
 * @returns {Array<string>} returns the HTML string for each flower. See example : 
 * @example buildFlowerHTML(); // should return:
 * // [
 * //   `<li style="color: red;">ROSE</li>`,
 * //   `<li style="color: white;">ORCHIDEE</li>`,
 * //   ...
 * // ]
 */
function buildFlowerHTML() {
  const flowers = [{ // Do not modify this array directly ;-)
    name: "rose",
    color: "red",
  }, {
    name: "orchidee",
    color: "white",
  }, {
    name: "peony",
    color: "white",
  }, {
    name: "lilac",
    color: "purple",
  }, {
    name: "poppy",
    color: "red",
  }, {
    name: "daisy",
    color: "white",
  }];

  // TODO: implement this function.
  // NOTE: do not 'hard-code' the whole result directly, it's cheating 🙀 Use .map instead :)
}


// ------------------------
// ------ EXERCICE 6 ------
// ------------------------

/**
 * @param {Array<number>} dogBreeds 
 * @param {string} searchTerm
 * @returns returns true (or false) whether the searchTerm is present in the dogBreeds list (or not)
 * @example ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "Akita") // returns true
 * @example ouafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "Yorkshire") // returns false
 */
function ouafOuaf(dogBreeds, searchTerm) {
  // TODO: implement this function
}


// ------------------------
// ------ EXERCICE 7 ------
// ------------------------

/**
 * @param {Array<number>} dogBreeds 
 * @param {string} searchTerm
 * @returns returns true (or false) whether the searchTerm is included in one of the dog breeds. 
 * @example improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "HUAHUA") // returns true
 * @example improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "collie") // returns true
 * @example improvedOuafOuaf(["Akita", "Border Collie", "Chihuahua", "Shiba"], "Yorkshire") // returns false
 */
function improvedOuafOuaf(dogBreeds, searchTerm) {
  // TODO: implement this function
  // Tips: use .some (on array) and .includes (on string)
}



// ------------------------
// ------ EXERCICE 8 ------
// ------------------------

/**
 * @param {string} color 
 * @returns true (or false) if the flowers array contains a flower of the requested color
 * @example hasFlower("red"); // true
 * @example hasFlower("yellow"); // false
 */
function hasFlower(color) {
  const flowers = [{ // Do not modify this array directly ;-)
    name: "rose",
    color: "red",
  }, {
    name: "orchidee",
    color: "white",
  }, {
    name: "peony",
    color: "white",
  }, {
    name: "lilac",
    color: "purple",
  }, {
    name: "poppy",
    color: "red",
  }, {
    name: "daisy",
    color: "white",
  }];

  // TODO: implement this function.
}


// -------------------------------------------------------------------

// DO NOT REMOVE THIS EXPORT, IT IS USED FOR TEST PURPOSES.
// RUN TEST WITH `npm run test S04 E01 02` from projet root directory

module.exports = {
  removeOddNumbers,
  filterFlowers,
  findFlower,
  computeSquares,
  buildFlowerHTML,
  ouafOuaf,
  improvedOuafOuaf,
  hasFlower
};
