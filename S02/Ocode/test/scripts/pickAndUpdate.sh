git checkout main
git fetch git@github.com:O-clock-FS-JS/Ocode.git
git cherry-pick $1
git checkout correction
git merge main --no-edit
git checkout main
