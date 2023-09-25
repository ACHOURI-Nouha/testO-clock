/* ========= Dice Roller =========

Objectif : écrire un programme qui permet de lancer des dés et d'en faire la somme :

Spécifications : 
  - Si l'utilisateur tape "help", on affiche le petit message d'aide suivant : "Indiquez un nombre pour lancer des dés, ou 'bye' pour quitter."
  - Si l'utilisateur tape "bye", on termine le programme.
  - Sinon, si l'utilisateur tape un nombre, on lance le nombre de dés correspondant et on affiche la somme : `La somme des X dés fait Y.`
  - Si l'utilisateur tape autre chose qu'un nombre, lui afficher le message suivant : "Erreur : commande non reconnue. Indiquez un nombre pour lancer des dés, ou 'bye' pour quitter."


Etape 1 - Complétez la fonction "rollRandomDice" pour qu'elle renvoie un nombre entier aléatoire entre 1 et 6 (compris) à chaque appel.

Etape 2 - Rajoutez le listener qui permet d'écouter quand une nouvelle ligne est entrée par l'utilisateur. Notez que le module readline est déjà importé, et l'interface déjà implémentée. 

Etape 3 - Traitons d'abord les deux premiers cas : "help" et "bye". 

Etape 4 - Traitons ensuite le cas d'erreur précisé dans l'énoncé : l'entrée n'est pas un nombre, ni "bye", ni "help".

Etape 5 - Traitons maintenant le cas où l'entrée utilisateur est bien un nombre. 
  - Récupérez ce nombre. Pensez à le `console.log` pour tester (et assurez vous qu'il s'agit bien d'un `number` avant d'avancer ;) )
  - Et utilisez-le pour produire une boucle :
    - Dans un premier temps affichez chaque lancé de dé, sans faire la somme, pour tester de votre côté avec console.log.
  -   Dans un second temps, faites la sommes des lancés de dé et n'affichez que ça.

Que la chance soit avec vous !

*/

// Nous allons demander à l'utilisateur d'entrée des valeurs, nous avons donc besoin du module readline
const readline = require("readline");

// Cf. documentation de readline si besoin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rollRandomDice() {
  return -1;
}
