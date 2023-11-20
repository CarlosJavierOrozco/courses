# Etiquetas
Con esta opción git nos permite versionar nuestro código, librería o proyecto.

## listar etiquetas
git tag

## crea una etiqueta
git tag numero-versión

## eliminar una etiqueta
git tag -d numero-versión

## mostrar información de una etiqueta
git show numero-versión

## sincronizando la etiqueta del repositorio local al remoto
git add .
git  tag v1.0.0
git commit -m "v1.0.0"
git push origin numero-versión

## generando una etiqueta anotada (con mensaje de commit)
git add .
git tag -a "v1.0.0" -m "Mensaje de la etiqueta"
git push --tags
