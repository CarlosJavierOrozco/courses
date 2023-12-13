<?php

/**
 * include
 *
 * Incluye y evalúa el archivo especificado.
 *
 * Cuando se incluye un archivo, el código que contiene
 * hereda el ámbito de las variables de la línea en la
 * que ocurre la inclusión.
 */
include 'suma.php';
//include 'suma.php';

$resultado = suma(2,5);
var_dump($resultado);
