# POKEMONS - GOTTA CATCH 'EM ALL - TROISIEME PARTIE !

Reprendre le code de l'épisode 3 et/ou 4 pour aujourd'hui... créer un **Pokédex** !

----

## Partie 1 - Création de la route du Pokédex

- Créer une route `GET /pokedex` qui affiche la liste des Pokémons mis en `session`.
  - Pour l'instant, il nous n'avons pas mis en place de `session` : on se contentera d'afficher 2 pokémons aléatoires (choississez vos préférés !) sur la page.
  - On rendra cette page plus dynamique en partie 3. 
- Dans la `navbar` de mon application, on ajoute un lien vers cette page. 


## Part 2 - Mise en place des sessions

- Installer et paramétrer le middleware `express-session` afin de créer une `session` pour nos utilisateurs qui visitent notre site. 

- Vérifier : depuis les controlleurs, on devrait à présent avoir accès à une variable `req.session` sur laquelle on ira stocker plein de chose, et notamment, constituer... notre Pokedex !

## Part 3 - Bouton d'ajout d'un Pokémon au Pokédex

- Sur la page `/pokemons` (qui liste tous les pokemons), ajouter pour chaque Pokémon un petit bouton discret pour ajouter ce Pokémon à notre Pokedex. Ce bouton doit :
  - déclencher une requête sur la route `GET /pokedex/add/:id` (où `id` est celui du Pokémon à ajouter au Pokédex), afin de :
    - stocker l'ID du Pokémon dans les données de `session`
      - (par exemple dans `req.session.selectedPokemonIds` ?)
  - puis rediriger vers la page `/pokedex`

- Modifier ensuite la page `/pokedex` afin qu'elle affiche tous les Pokémons stockés dans nos données de sessions !

- Tester : 
  - On ajoute un Pokémon, on est redirigé vers la page `/pokedex` et on y voit ce Pokémon !

- Enfin :
  - Interdire à l'utilisateur d'ajouter plusieurs fois le même Pokémon dans son Pokedex.
  - Interdire à l'utilisateur d'ajouter plus de 20 Pokémons à son Pokedex.

## Part 4 - Bouton de retrait d'un Pokémon du Pokédex

- Sur la page `/pokedex`, ajouter un bouton par Pokémon du Pokedex pour le retirer du Pokédex.
  - On peut utiliser la route `GET /pokemon/remove/:id`
  - Puis rediriger vers `/pokedex`

## Partie 5 - Indicateur du nombre de Pokémons du Pokédex

- Dans la `navbar`, on souhaite à présent indiquer le nombre de Pokémons présent dans le Pokédex.
- Par exemple, s'il y a 3 Pokémons dans mon Pokédex, on affichera `(3)` à côté/au niveau du lien vers le Pokédex.


## Partie 6 (bonus) - Indicateur d'appartenance au Pokédex

- Sur la page des Pokémons (`/pokemons`), on aimerait voir facilement quels Pokémons sont déjà dans mon Pokédex.
- Modifier le `bouton d'ajout du Pokémon au Pokedex` afin que :
  - si le Pokémon est déjà dans le Pokédex, on retire le Pokémon du Pokédex :
    - on adaptera donc le texte/icon du bouton en conséquence !
  - si le Pokémon n'est pas déjà dans le Pokédex, rien ne change : il sera ajouté au Pokédex. 

## Partie 7 (bonus du bonus) - Ajouter au Pokédex depuis la page d'un Pokemon 

- Sur la page d'un Pokémon (`/pokemon/:id`):
  - si le Pokémon n'est pas déjà dans le Pokédex de l'utilisateur
    - ajouter un bouton "Ajouter au Pokédex"
  - si le Pokémon est dans le Pokédex de l'utilisateur
    - ajouter un bouton "Retirer du Pokédex"

- A présent, lorsqu'on ajoute/retirer un pokemon au/du Pokédex, on veut toujours rediriger vers la page en cours, au lieu de rediriger vers la route `/pokedex` systématiquement. 
  - Par exemple, ajouter un Pokémon depuis la liste des Pokémons doit nous laisser sur cette page, et retirer un Pokémon depuis sa propre page doit nous laisser sur cette page.
  - Pour cela, on peut utiliser `req.get("referrer")` pour obtenir l'URL d'origine de la requête.
