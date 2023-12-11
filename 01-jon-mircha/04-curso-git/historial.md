# Registro del Historial

git log nos permite conocer todo el historial de un proyecto, con la información de la fecha, el autor y id de cada cambio.

git log

## muestra en una sola línea por cambio

git log --oneline

## guarda el log en la ruta y archivo que especifiquemos
git log > commits.txt

## muestra el historial con el formato que indicamos
git log --pretty=format:"%h - %an, %ar : %s"

## cambiamos la n por cualquier número entero y mostrará los n cambios recientes
git log -n

## muestra los cambios realizados después de la fecha especificada
git log --after="2019-07-07 00:00:00"

## muestra los cambios realizados antes de la fecha especificada
git log --before="2019-07-08 00:00:00"

## muestra los cambios realizados en el rango de fecha especificado
git log --after="2019-07-07 00:00:00" --before="2019-07-08 00:00:00"

## muestra una gráfica del historial de cambios, rama y fusiones
git log --oneline --graph --all

## muestra todo el registro de acciones del log incluyendo inserciones, cambios, eliminaciones, fusiones, etc.
git reflog

## diferencias entre el Working Directory y el Staging Area
git diff
