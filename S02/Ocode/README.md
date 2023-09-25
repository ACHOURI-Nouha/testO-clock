# Ocode
Farandole d'exercices pour les étudiants en Cockpit !

## Installation

Hep hep hep, n'oublie pas les étapes d'installation : 

```bash
git clone <ssh_repo_url> # Clone le repo

cd <repo_name> # Place ton terminal dans le repo

npm install # Installe les dépendances du projet (pour lancer les tests automatisés). Formule magique. 

git checkout -b <mon_speudo_github> # Créer une branche (avec pour nom ton speudo GitHub) et te déplace sur cette branche

git push --set-upstream origin $(git branch --show-current) # Pousse la branche locale vers le repo distant

code . # Ouvre le dossier dans VSCode
```

## Kesako

Le dossier `FS-JS` contient des exercices organisés par saison et épisode.

Lorsque l'étudiant complète un exercice, il peut ensuite lancer une série de tests implémentés par les profs O'clock pour valider sa progression.

⚠️ Chers apprenants, n'hésitez pas à `push` vos exercices ! Les branches `main` et `correction` sont protégées 🛡️, vous n'avez aucun risque de "tout casser" !

## Lancer les tests

```
npm run test # Execute tous les tests du repository
npm run test S02 # Execute tous les tests de la saison S02
npm run test S02 E01 # Execute tous les tests de la saison S02 épisode E01
npm run test S02 E01 01 # Execute le fichier de test prefixé 01. dans la saison S02 épisode E01
```

<details><summary>
Attention à la syntaxe
</summary>

`npm run test S02/E01/01` ne fonctionnera pas pour l'instant. Il faut donner 3 arguments.

</details>

## Le coin des profs

<details><summary>
Ajouter des exercices
</summary>

- `npm run generate` et suivre les instructions :
  - cela génère les fichiers appropriés dans le bon dossier.
  - si cette structure n'est pas adapté à l'exo en question, à vous de jouer !

- Implémenter des tests (si possible) :
  - [Doc Chai](https://www.chaijs.com/)
  - [Doc Sinon](https://sinonjs.org/)
  - Test de type DOM (`.test.dom.js`) à inclure dans le HTML du fichier

- Tester ses exercices (ne faites pas comme moi 😂) :
  - Option bourrin: dans le fichier prévue pour l'élève (bof bof)
  - Option smart: utiliser l'alias `npm run test:prof` pour faire pointer les tests vers le fichier `.prof.js` non versionné.
    - Pour certains exercices, cela peut impliquer quelques modifications des utilitaires de tests.

- Enjoy !
</details>

<details><summary>
Ajouter un exercice en cours de saison
</summary>

Lire la section Git Flow de ce readme pour comprendre le fonctionnement des mises à jours des exercices.

</details>

<details><summary>
Problèmes vus en Cockpit
</summary>

- Si un étudiant voit les suggestions ESLint s'appliquer avant la S02E07, il/elle a peut-être ouvert le repo dans un sous dossier au lieu de l'ouvrir à la racine du projet !

</details>

<details><summary>
Git Flow
</summary>

- Ce repo est dans l'organisation `O-clock-FS-JS` comme template. Cette org n'est pas accessible aux étudiants. 

- Pour utiliser ce repo avec une promo :
  - utiliser ce template pour générer un repo nommé `Ocode-NomDeLaPromo` dans l'org de la promo.
  - protéger la branche `main` contre les push des étudiants dans les settings GitHub.
  - créer une branche `correction` sur laquelle corriger les exercices avec les étudiants. Protéger cette branche contre les push étudiants.
  - A l'installation, les étudiants créent et push leur propre branche sur le repo.

- Si je souhaite ajouter un nouvel exercice en cours de saison ?
  - Si possible, l'ajouter sur le repo de l'orga `O-clock-FS-JS/Ocode`:
    - cela profitera à tous les autres enseignants qui souhaiteraient alors ré-utiliser l'exercice.
    - une fois exercice push sur ce repo, se rendre dans celui de la promo (`Ocode-NomDeLaPromo`) et utiliser l'alias `npm run pick <SHA>` pour cherry pick le/les commit(s) depuis le repo `O-clock-FS-JS/Ocode`. Attention à bien se placer sur main.
  - Si pas possible/interessant, faire les modifs sur le `main` du `Ocode-NomDeLaPromo` et voila.
  - Enfin, demander aux étudiants de lancer **depuis leur branche** la commande `npm run update`. 


</details>
