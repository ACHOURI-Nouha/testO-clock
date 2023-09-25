# POKEMON - GOTTA CATCH 'EM ALL !

## Partie 1 - Modélisation de la base de données

- Le fichier `data/create_pokemon_db.sql` contient le MPD (modèle physique de données) pour générer une base de pokemons et de leurs dresseurs ! 

**Exercice :**

A partir de ce MPD, reconstuire le MCD (modèle conceptuelle de données) dans un schema.
- schema a `main levée` accepté.
- schema sur `draw.io` accepté.
- schema réalisé sur `mocodo` à l'aide d'un speudo-language accepté (http://mocodo.wingi.net/).
- schema sur tout autre outil accepté ! Bref, tout ce qui vous arrange pour avoir les données sous les yeux facilement ! 

**Notes :**
- l'exercice inverse aurait été plus intéressant, certes (problématique => MCD => MLD => MPD).
- mais plusieurs modélisations étant possibles, difficile de remplir les BDD de chacun avec des données communes.
- ça sera pour la prochaine fois !

---

## Partie 2 - Création de la base de données

A partir de votre client terminal `psql`, créer :
- un utilisateur nommé `pokemon` avec un mot de passe `pokepass`.
- une base de données nommée `pokemon` avec l'utilisateur `pokemon` comme propriétaire (owner).
- vous connecter à cette base avec l'utilisateur `pokemon`. (indice: commande `\c`).
- pour vérifier que l'utilisateur a bien les droits d'écriture sur la base: 
  - essayer de créer la table `pokemon(id, name)` et y insérer un ou plusieurs pokemons.
  - cette table sera temporaire et écrasé prochainement.

---

## Partie 3 - Remplissage de la base de données

- Executer le script `data/create_pokemon_db.sql` via `psql` afin :
  - de créer/re-créer les tables manquantes 
  - et d'y insérer des pokemons, dresseurs et companie !

- Vérifier l'état de la base par quelques requêtes manuelles.

---

## Partie 4 - Connexion à la base de données (via module PG)

- Farfouiller le dossier `app` pour comprendre l'architecture de notre application. 
- Note : il n'y a pas de `package.json` pour éviter le doublon avec celui à la racine du repo Ocode, mais il aurait pu y être.

**Exercice :**

- Le fichier `app/database/client.js` contient la connexion `pg` vers notre base.
- Il ne reste plus qu'à paramétrer correctement cette connexion `client.js` pour pointer vers notre base `pokemon` avec l'utilisateur `pokemon`.
  - vous pouvez utiliser un fichier d'environment `.env` si vous le souhaitez.
  - mais vous pouvez tout à fait hard-coder les valeurs de configuration dans le fichier `client.js` dans un premier temps ! 

**Vérification :**
- Lancer l'app depuis la racine du projet Ocode via la commande `npm run dev S04 E03 01` ! 
- Accéder à la route `/` : vous devriez voir la liste des dresseurs pokemon s'afficher !

---

## Partie 5 - Compléter la route /pokemons

- Pour le moment, la route `/pokemons` ne retourne pas la liste des pokemons mais un pauvre `TODO` 😿. 
- A toi de jouer pour récupérer les pokemons depuis la base et les afficher dans la vue !


## Partie 6 - Un middleware de log !

*T'as dit middleware 😰 😰 😰 ? Gloups !* 

Pas de panique, tout va bien se passer 🫠 !
L'idée est de créer un middleware qui enregistre dans la base de données toutes les requêtes faites sur notre app. Afin, par exemple, de savoir quelles sont les routes les plus (ou moins) demandées et les améliorer ! En gros, on recode [Datadog](https://www.datadoghq.com/)

- Etape 1 : depuis le client `psql`, créer une table `log` dans la base `pokemon`. Voici le MLD (modèle logique de données) attendu pour cette table : 
  

|       | log          | 
| ----- | ------------ |
| id    | INT          |
| url   | VARCHAR(255) |
| time  | TIMESTAMP    | 
| ip    | VARCHAR(255) |

*Mais c'est quoi ça timestamp ?* => La doc est [par là !](https://docs.postgresql.fr/10/datatype-datetime.html#DATATYPE-DATETIME-INPUT)

- Etape 2 : vérifier qu'on peut bien insérer un enregistrement dans cette table manuellement ! 

- Etape 3 : créer le middleware dans l'`index.js` qui à chaque nouvelle requête vers notre app, enregistre en base les informations de cette requêtes :
  - l'url de la requête
  - l'heure de la requête
  - l'ip du requester


## Partie 7 - Et la route pour voir ces logs

- Ajouter une nouvelle route `GET /admin/logs` à notre app :
  - cette route doit afficher les **10 derniers logs** (chronologiquement) de la base. 

<details><summary>
Indices ?
</summary>
Il faudra donc : 
- déclarer une route
- ajouter une fonction dans l'un des controller pour 
  - récupérer les 10 derniers logs de la base trié par ordre chronologique inverse. 
  - passer ces `logs` à une vue fraichement créer dans le dossier `views`
    - dont le rôle est d'afficher les logs dans un format correct

Bonne chance ! 
GOTTA LOG 'EM ALL !
</details>
