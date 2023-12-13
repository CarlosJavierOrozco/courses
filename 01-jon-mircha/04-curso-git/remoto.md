# Remotos
## muestra los orígenes remotos del repositorio
git remote

## muestra los orígenes remotos con detalle
git remote -v

## agregar un orígen remoto
git remote add nombre-orígen https://github.com/usuario/repositorio.git

## renombrar un orígen remoto
git remote rename nombre-viejo nombre-nuevo

## eliminar un orígen remoto
git remote remove nombre-orígen

## descargar una rama remota a local diferente a la principal
git checkout --track -b rama-remota origin/rama-remota
