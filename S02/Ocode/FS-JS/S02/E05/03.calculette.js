/*

## Objectif

Créer une calculatrice.
Bon, avec uniquement l'opération pour multiplier... mais c'est déjà pas mal !


## Spécifications

L'utilisateur entre 2 nombres entiers puis appuie sur le bouton "Calculer !"
Le programme affiche alors le produit des deux membres dans le champs dédié.

## Tester

Pas de tests automatisés pour le moment, il faudra tester manuellement.

## Conseil

Lorsqu'on soumet un formulaire (<form>) en cliquant sur un bouton, se déclenche alors, par défaut, une requête HTTP. 
Cette requête HTTP a pour conséquence un **rechargement de la page** ! 

Il faut empêcher ce comportement par défaut si l'on veut pouvoir traiter manuellement le formulaire.
Pour cela, on peut utiliser [`event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)


*/
