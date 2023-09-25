#!/bin/bash

season_nb=$1
episode_nb=$2
exercice_nb=$3

# Assert valid arguments format
if [[ $season_nb =~ "/" ]]; then
    echo ⚠ Bad usage of script arguments ⚠
    echo Should be \'S0X E0X 0X\' and not \'S0X/E0X/0X\'
    exit 1
fi

episode_path=FS-JS/$season_nb/$episode_nb
exercice_path=$(find $episode_path -name "$exercice_nb*")
app_path=$exercice_path/app/


green_color='\033[0;32m'
grey_color='\033[0;38m'
end_color='\033[0m'
echo -e "${green_color}===> Lancement de l'application : $app_path $end_color"
echo -e "${grey_color}=> En cas d'erreur sur ce chemin, assurez-vous d'etre a la racine du repo Ocde."
echo -e "${grey_color}=> si l'erreur persiste, ne pas hesiter à lancer l'application manuellement : npx nodemon /path_to_your/index.js $end_color \n\n"

npx nodemon -q $app_path
