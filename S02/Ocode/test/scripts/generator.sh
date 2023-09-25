#!/bin/bash

# Should be run from root folder

echo Generate new exercice : 

echo Season number \(format: S0X\)
read season_nb

echo Episode number \(format: E0X\)
read episode_nb

echo Exercice number \(format: XX\)
read exercice_number

echo Exercice name \(format: nameInCamelCase\)
read exercice_name

target_folder_path=FS-JS/$season_nb/$episode_nb
template_path=test/scripts/templates

mkdir -p $target_folder_path

JS_FILE_NAME=$target_folder_path/$exercice_number.$exercice_name.js
JS_PROF_FILE_NAME=$target_folder_path/$exercice_number.$exercice_name.prof.js
HTML_FILE_NAME=$target_folder_path/$exercice_number.$exercice_name.html
JS_TEST_FILE_NAME=$target_folder_path/$exercice_number.$exercice_name.test.js

touch $JS_FILE_NAME
touch $JS_PROF_FILE_NAME
cp $template_path/template.html $HTML_FILE_NAME
cp $template_path/template.test.js $JS_TEST_FILE_NAME

TEMPLATE_SEASON=$season_nb
TEMPLATE_EPISODE=$episode_nb
TEMPLATE_NUMBER=$exercice_number
TEMPLATE_NAME=$exercice_name
TEMPLATE_TITLE=$exercice_number.$exercice_name
TEMPLATE_JS_SRC=.\\/$exercice_number.$exercice_name.js

sed -i '' 's/TEMPLATE_SEASON/'$TEMPLATE_SEASON'/g' $JS_TEST_FILE_NAME
sed -i '' 's/TEMPLATE_EPISODE/'$TEMPLATE_EPISODE'/g' $JS_TEST_FILE_NAME
sed -i '' 's/TEMPLATE_NUMBER/'$TEMPLATE_NUMBER'/g' $JS_TEST_FILE_NAME
sed -i '' 's/TEMPLATE_NAME/'$TEMPLATE_NAME'/g' $JS_TEST_FILE_NAME

sed -i '' 's/TEMPLATE_TITLE/'$TEMPLATE_TITLE'/g' $HTML_FILE_NAME
sed -i '' 's/TEMPLATE_JS_SRC/'$TEMPLATE_JS_SRC'/g' $HTML_FILE_NAME
