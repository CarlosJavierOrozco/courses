# Reseteo del historial
Podemos eliminar el historial de cambios del proyecto hacia adelante con respecto de un punto de referencia.

## nos muestra el listado de archivos nuevos (untracked), borrados o editados
git status

## borra HEAD
git reset --soft

## borra HEAD y Staging
git reset --mixed

## borra todo: HEAD, Staging y Working Directory
git reset --hard

## deshace todos los cambios después del commit indicado, preservando los cambios localmente
git reset id-commit

## desecha todo el historial y regresa al commit especificado
git reset --hard id-commit
