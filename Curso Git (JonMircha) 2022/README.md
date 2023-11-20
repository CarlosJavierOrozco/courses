# ACTUALIZACION CURSO DE _GIT_ &  _GITHUB_ 2022 - @JONMIRCHA

## CONFIGURANDO GIT POR PRIMERA VEZ 

git --version
git config --global user.name "Jonathan MirCha"
git config --global user.email jonmircha@gmail.com
git config --global user.ui true
git config --list
#### asignando visual studio code como editor de configuración de git
git config --global core.editor "code --wait"
git config --global -e
#### para estandarizar los saltos de línea en windows
git config --global core.autocrlf true
#### para estandarizar los saltos de línea en linux/mac
git config --global core.autocrlf input
#### ver todas las opciones de la configuración en la terminal
git config -h
#### ver todas las opciones de la configuración en el navegador
git help config

## Inicializar Git en un directorio local
mkdir carpeta
cd carpeta
touch README.md
touch .gitignore
git init
code .