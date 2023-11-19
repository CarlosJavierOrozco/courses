### Curso Git desde cero
Sistema de control de versiones para el mantenimiento eficiente y confiable de archivos.

#### Configurando Git por primera vez
```
git config --global user.name "Carlos J. Orozco"
git config --global user.email carlosjorozco.jw@gmail.com
git config --global core.editor nano
git config --list
```

#### Zonas de Git
1. Directorio de trabajo
2. Área de preparación
3. Directorio Git

#### Flujo de trabajo básico en Git
1. Modificas una serie de archivos en tu directorio de trabajo.
2. Preparas los archivos, añadiéndolos a tu área de preparación.
3. Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación y almacena esa copia instantánea de manera permanente en tu directorio de Git.

# MAS NOTAS DE CLASE TOMADAS

NOTA DE GIT

Para comenzar un proyecto en GIT. Lo primero comando a usar es:

git init
inicializar git

git status
ver el estado de los archivos

git add nombre-archivo
agrega los archivos al staging area


git commit -m "mensaje, poruqe hice el commit"
hacer un snapshot de un punto en la historia de tu proyecto.

git config --global user.name "Carlos J. Orozco"
git config --global user.mail carlosjorozco.jw@gmail.com

touch .gitignore
dentro de esta carpeta se coloca todos los archivos y carpetas que quiero que no sean agregados. 


git branch
crear ramas, dentro de esas ramas podemos trabajar en nuevas funciones. 


git checkout nombre-ramas
moverme a una rama en particular. 
