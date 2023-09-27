// C'est dans ce fichier qu'on écrit notre code JS et pas ailleurs !

/* alert("je suis une alerte JS c'est pas bien m'utiliser") 
console.log("coucou depuis js");
const name = prompt("Hello ! Comment tu t'appelles ?");
alert("Bonjour " + name + "!");
prompt("comment tu t'appelles ?")*/


/*
Exo en autonomie:
1. Créer des variables pour mon prénom, nom et age;
2. Concaténer le tout dans une jolie phrase (qu'on pourra mémoriser dans une nouvelle variable si on veut )
3/ Afficher cette jolie phrase (en console ou en alert)
const name = "Nouha";
const surname = "Achouri";
const age = 31;

const presentation = console.log("Bonjour je m'appelle " + name + " " + surname + " et j'ai " + age + " printemps ;D");

*/
//const firstName = prompt("C'est quoi ton prénom ?");
//const lastName = prompt("maintenant le nom ?")
//const age = prompt("et t'as quel âge ???");
/*const presentation = "Bonjour " + firstName + " " + lastName + "tu es âgé de " + age + " ans !";*/

// On va utiliser la syntaxe moderne pour la concaténation : c'est plus lisible !
// Cette syntaxe ce sont les template strings (littéraux de gabarit en fr)
//! Il faut entourer la string avec des ``, et entourer les variables avec ${}
/*const welcome = `Hey salut ${firstName} ${lastName}, alors comme ça on a déjà ${age} piges ? Hahaha welcome 🌺!`;

alert(welcome);

const birthYear= prompt ("en quelle année est-tu né ?");
const currentYear = 2023;
const userAge = currentYear - birthYear;

const age = `Hey tu as donc ${userAge} !`; 
alert(age);

 CONDITIONS & COMPARAISONS

    si age > 17
    message "vous êtes majeur"
    sinon message "vous êtes mineur"


let age = 17.5;
if (age > 17 ){
    alert("vous êtes majeur");
}
else if (age > 0  && age <= 17){
    alert("vous êtes mineur !");
}
else
    alert("vous existez pas oh!");


demander et enregistrer user role
Si user role egal admin

let userRole = prompt("Quel est votre rôle ?")
if (userRole === "admin"){
    alert("Bienvenu Boss :D");
}
else{
    alert("Accès non autorisé !");
}

let userRole = prompt("Quel est votre rôle?")
if (userRole === "admin"){
    let userPassword = prompt("Et le code ?");
        if(Number(userPassword) === 1234){
            alert("Bienvenu Boss :D");
        }
        else {
            alert("Les 22 arrivent !")
        }
}
else{
    alert("Accès non autorisé !");
}*/

const wannaPlay = confirm('Voulez-vous jouer à un jeu ?');
console.log(wannaPlay);

// La variable wannaPlay conteindra un booléen. 
// On peut donc se baser dessus directement dans la condition, sans avoir à écrire une comparaison.
// En effet, le résulytat d'une comparaison est un booléen !!
if (wannaPlay) {
// if ( confirm('Voulez-vous jouer à un jeu ?') ) { // Ce raccourci est possible
  alert('On va jouer ! ✨');
} else {
  alert('Ok, une prochaine fois ! 😎');
}