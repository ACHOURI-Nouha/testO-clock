// -------- Exercice 1 -----------

/**
 * Calculer le pourcentage de mémoire RAM libre, arrondi à l'entier supérieur et l'_afficher_ (log) sous le format suivant :
 * "Pourcentage de RAM libre : XX%."
 * 
 * Si celui-ci est inférieur ou égal à 2%, ajouter sur un log complémentaire : 
 * "Attention, seuil critique atteint !"
 * 
 * Vous aurez certainement besoin du module Node 'os' et des fonctions 'freemem' et 'totalmem'. 
 */
function displayMemoryStatus() {

}

// Note (FYI): pourquoi la freemem() est-elle si petite sur un système ? => https://www.quora.com/What-is-the-difference-between-free-memory-and-available-memory-in-operating-systems


// -------- Exercice 2 -----------

/**
 * Caculer le temps d'utilisation du système et l'_afficher_ (log) au format suivant :
 * "Machine allumée depuis XX heures YY minutes et ZZ secondes."
 * 
 * Trouver la fonction appropriée dans la documentation de Node 'os' module. 
 */
function displaySystemUptime() {

}



// -------- Exercice 3 -----------

/**
 * Afficher le load average du système, et l'afficher au format suivant :
 * 
    Charge moyenne système :
    - A 1 minute : 2.4% (🟢)
    - A 5 minutes : 21.5% (🟠)
    - A 15 minutes : 57.5% (🔴)

 * Chaque valeur est arrondie à 1 chiffre après la virgule.
 * Code couleur pour les indicateurs colorés :
 *  - Rouge si >= 50%. 
 *  - Orange si >= 20%.
 *  - Vert sinon
 * A noter, les espaces et les sauts de lignes sont ignorés par les tests automatisés. Pas besoin de trop s'embêter.
 * 
 * Un peu de documentation ne fera pas de mal :
 * - https://www.malekal.com/quest-ce-que-le-load-average-sur-linux/
 * - https://nodejs.org/api/os.html#osloadavg
 */
function displayLoadAverage() {

}

// Ne pas supprimer cette ligne pour faire fonctionner les tests automatisés
module.exports = { displayMemoryStatus, displaySystemUptime, displayLoadAverage };
