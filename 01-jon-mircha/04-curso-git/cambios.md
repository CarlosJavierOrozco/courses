# Cambios
Puedes agregar modificaciones al último cambio

## sin editar el mensaje del último commit
git commit --amend --no-edit

## editando el mensaje del último commit
git commit --amend -m "nuevo mensaje para el último commit"

## eliminar el último commit
git reset --hard HEAD~1
Podemos desplazarnos en el historial del repositorio hacia atrás o adelante en cambios o ramas , sin afectar el repositorio como tal.

## cambiar a una rama
git checkout nombre-rama

## cambiar a un commit en particular
git checkout id-commit
