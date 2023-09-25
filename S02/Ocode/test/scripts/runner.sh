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


folderPath=FS-JS/$season_nb/$episode_nb
if [[ -z "$exercice_nb" ]]; then
    # Execute all tests in the folder
    mocha --require test/hooks.js --recursive --extension .test.js $folderPath
else
    # Execute only specified exercice
    mocha --require test/hooks.js --recursive --extension .test.js $folderPath/$exercice_nb.*.test.js
fi
