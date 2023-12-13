# Ramas
Una rama nos permite aislar una nueva funcionalidad en nuestro código que después podremos añadir a la versión principal.

## crear rama
git branch nombre-rama

## cambiar de rama
git checkout nombre-rama

## crear una rama y cambiarte a ella
git checkout -b rama

## eliminar rama
git branch -d nombre-rama

## eliminar rama (forzado)
git branch -D nombre-rama

## listar todas las ramas del repositorio
git branch

## lista ramas no fusionadas a la rama actual
git branch --no-merged

## lista ramas fusionadas a la rama actual
git branch --merged

## rebasar ramas
git checkout rama-secundaria
git rebase rama-principal

# Esta linea la modifique desde la rama main

# Modificacion desde la rama GIT

_DEJE ESTAS DOS ULTIMAS LINEAS_
