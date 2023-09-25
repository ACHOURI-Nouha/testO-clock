// Etape 1 - Demander à l'utilisateur s'il aime, ou non, le film Harry Potter (=> `confirm`)

// Etape 2 - Conditions:
//   - Si l'utilisateur choisit par l'affirmative ('OK'), alors lui dire exactement "Tu as bon gout !" (=> `alert`)
//   - Si l'utilisateur choisit par la négative ('Annuler'):
//     - Lui demander d'entrer le titre d'un film qu'il aime (=> `prompt`)
//     - Lui répondre exactement "Ah donc tu aimes XXXXX, mais quel gout à la con !" (=> `alert`)
//        - où  XXXXX est le nom du film entré par l'utilisateur

const choice = confirm("Aimez-vous le film Harry Potter");
if (choice){ 
  alert("Tu as bon gout !");
}
else { 
  let XXXXX = prompt("Quel est le titre du film que vous aimez ?");
  alert(`Ah donc tu aimes ${XXXXX}, mais quel gout à la con !`);
}