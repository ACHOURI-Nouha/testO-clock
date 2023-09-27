//! EXO AUTONOMIE
//* Créer un tableau contenant des fruits
// Essayez d'afficher (alert ou console) les fruits de votre tableau dans une jolie phrase
// => "Je mange : <FRUIT>"
/*
function fruits(nb){
    let fruitsArr = ["pastèque", "fraise", "banane", "anone", "pêche"];
    console.log(`Je mange une : ${fruitsArr[nb]}`);
}
fruits(0);
fruits(1);
fruits(2);
fruits(3);
fruits(5);
*/

//! EXO AUTONOMIE
//* On en veut plus écrire "à la main" les question et les réponses dans les arguments de fonction
// On aimerait plutôt passer par des tableaux.
// Créer donc un tableau contenant toutes les questions et un autre avec toutes les solutions
// Utiliser ces tableaux dans les appels de la fonction 'askQuestion' (afin de passer la bonne question & réponse)


// Compteur de points
let scores = 0;

// Fonction pour poser une question à l'utilisateur, recup sa réponse et verifier avec la solution
function askQuestion(question, solution) {
  const reponse = prompt(question);

  if (reponse === solution) {
    alert('Gagné !');
    scores = scores + 1;
  } else {
    alert('Perdu...');
  }
}

// On execute la fonction
askQuestion('Quelle mer borde la ville de Sébastopol ?', 'la mer Noire'); // Je veux poser la question 1 dont la solution est solution 1
askQuestion('Quel est l\'âge du capitaine ?', '63'); // Je veux poser la question 2 dont la solution est solution 2
askQuestion('Quelle est la meilleure promo d\'Oclock ?', 'Gaufre'); // Je veux poser la question 3 dont la solution est solution 3


// On affiche le score du joueur à la fin de la partie
alert(`Vous avez ${scores} bonnes réponses 👍`);

function askQuestion(question, answers) {

const questions = ["Quelle mer borde la ville de Sébastopol ?", "Quel est l'âge du capitaine ?", "Quelle est la meilleure promo d'Oclock ?"];
const answers = ["la mer Noire", "63", "Gaufre"];

askQuestion(questions[0], answers[0]);
askQuestion(questions[1], answers[1]);
askQuestion(questions[2], answers[2]);
}