# Fusiones
Une dos ramas. Para hacer una fusión necesitamos:

Situarnos en la rama que se quedará con el contenido fusionado.
Fusionar.
Cuando se fusionan ramas se pueden dar 2 resultados diferentes:

Fast-Forward: La fusión se hace automática, no hay conflictos por resolver.
Manual Merge: La fusión hay que hacerla manual, para resolver conflictos de duplicación de contenido.

# nos cambiamos a la rama principal que quedará de la fusión
git checkout rama-principal

# ejecutamos el comando merge con la rama secundaria a fusionar
git merge rama-secundaria
