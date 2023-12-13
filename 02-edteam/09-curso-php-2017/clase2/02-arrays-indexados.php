<?php

// Crea un array
$lenguajes = array('HTML', 'CSS', 'JS');
var_dump($lenguajes);

// Otra forma de crear un array. Disponible a partir de la versión 5.4 de PHP
$lenguajes = ['HTML', 'CSS', 'JS'];
var_dump($lenguajes);


// array de enteros
$integers = [3, 6, 9, 12];
var_dump($integers);

// array de floats
$floats = [1.30, 2.60, 3.90, 4.120];
var_dump($floats);

// Setea algunas variables
$uno = 1;
$dos = 2;
$tres = 3;

// Crear un array de variables
$variables = [$uno, $dos, $tres];
var_dump($variables);

// Un array puede contener varios tipos de datos.
$mezcla = array('Polo', $uno, 4, 21.52);
var_dump($mezcla);

// Las posiciones de un array inician en cero
$html = $lenguajes[0];
var_dump($html);

// Si intentamos acceder a una posición que no existe obtenemos un error PHP: Undefined offset.
$lenguajeInexistente = $lenguajes[3];
