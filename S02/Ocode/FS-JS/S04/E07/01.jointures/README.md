# Jointures et pokeballs

## Set-up

Créer l'utilisateur et la base de données `pokemon` de l'épisode `S04E03` (Partie 2 & partie 3), si ce n'est pas déjà fait !
Eventuellement vider cette base et la re-populer si celle-ci a été modifiée manuellement pendant les épisodes précédents.

## Professeur Chen a un nouveau message pour toi ! 

Hey salut jeune dev' désinvolte !

Dans le cadre de mes recherches poussées en Pokologie, j'ai charbonné pour récolter tout un tas d'information sur les Pokémons et leurs dresseurs ! Le problème : je n'ai aucune compétence en informatique et je me retrouve là, penaud, avec ma grande base de données inutilisées...

**Pourrais-tu m'aider à obtenir les informations suivantes ?** 
Si tu y parviens, je t'offre une Master Ball capable de capturer les Pokémons les plus farouches. Merci d'avance !

PS : j'attend une seule requête par question. Et oui, j'ai pas le temps de taper tes 72 queries , mes recherches sont bien trop prioritaires.
PS2 : n'hésites pas à faire un petit dessin (MLD) de la base de données, si ça peut t'aider à créer les requêtes plus facilement.

### Les requêtes

1. Le nombre de Pokémons qui possèdent une évolution.

2. La liste des _noms_ des Pokémons qui évoluent, et le _niveau_ qu'ils doivent atteindre pour évoluer.

3. Le _nom_ du dresseur qui possède le plus de Pokémon au stockage, et le nombre de Pokémon qu'il/elle possède.

4. Pour chaque dresseur, son _nom_ et la moyenne (arrondie) des _niveaux_ de ses Pokémons portés. 

5. Le nombre de Pokémon de _type_ 'Eau' que porte Peter.

6. Mais alors, qui est le meilleur dresseur !? (critère : somme des _niveaux_ de chaque Pokémon porté)


## Pour vérifier tes réponses :

Bon allé... mon omniscience en Pokologie est telle que je connais déjà les réponses à ces questions. Donc les voici. Ce qui m'interesse c'est que tu retrouves ces réponses par toi même !


<details><summary>
Spoiler (réponses)
</summary>

1. 72

2. 
```
 name       | evolution_level
------------+-----------------
 Bulbizarre |              16
 Herbizarre |              32
 ...        |             ...
```

3. 
```
 name | nb_of_pokemons
------+----------------
 Zab  |             24
```

4. 
```
name    | round
-----------+-------
 Major Bob |    21
 Olga      |    55
```

5. 1

6. 
```
 name | sum_level
------+-----------
 Zab  |       379
```

</details>
