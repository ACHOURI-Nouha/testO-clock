git fetch --all

if [ -z "$(git status --porcelain)" ]; then 
  git merge -X theirs main --no-edit
else 
  echo 
  echo ⚠️⚠️⚠️⚠️ Eh toi là ! ⚠️⚠️⚠️⚠️
  echo Il y a des changements non commités sur ta branche... Enregistre les d\'abord, puis relance la commande. Rappel :
  echo \> git add .
  echo \> git commit -m \"un_nom_de_commit_un_peu_sympa\"
  echo \> git push 
  echo ⚠️⚠️⚠️⚠️ ⬆ Error ⬆ ⚠️⚠️⚠️⚠️
fi
