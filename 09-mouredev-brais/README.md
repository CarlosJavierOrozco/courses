# GIT desde CERO para PRINCIPIANTES

## git log
git log --graph --pretty=oneline
git log --graph --decorate --all --oneline

## git alias 
git config --global alias.tree "comando que sera el alias llamado tree"

## git ignore

touch .gitignore

Con esto me da igual donde este ese fichero.

**/.DS_Store 

## prueba de GIT DIFF

## Desplazamiento en una rama

- mouredev
- braismoure
- Abiezerk
- agustinlopezdev
- geroschmidt
- javicb
- erickvr2k
- Alexis033
- LilyMilano
- _CarlosJavierOrozco_

## git reflog

Historial completo de interacciones

Al hacer un reset HARD al commit que deseamos volver es suficiente! 

con gitreflog vemos el commit queremos y que borramos con reset hard y luego hacemos un reset hard a ese commit.. es cuestion de verlo en la practica. 

## git tag

git checkout tags/clase_1 me desplazo a esta etiqueta


## git branch y git switch 

git switch es para cambiar de rama. Aparentemente hace lo mismo que checkout en este contexto de ramas.


## git merge 

Luego de resolver un conflicto se debera hacer un commit para completar el "merge"

## git stash 

Un commit que solo queda reflejado en tu local. Cuando al moverte a una rama git te pide que hagas commit o un stash. No lo sabia.

recuperame lo que hice stash

git stash pop

eliminar un stash

git stash drop

## git remote 

git remote add origin "repositorio en github.git"
git push -u origin main