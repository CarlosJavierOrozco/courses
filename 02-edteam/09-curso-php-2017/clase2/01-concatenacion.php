<?php

$primero = 'Yo quiero';
$segundo = ' un polo de JS';

// Concatenación
var_dump($primero . $segundo);

// Podemos concatenar muchos valores
$tercero = ' talla L ';
var_dump($primero . $segundo . $tercero . ':)');

/**
 * Podemos concatenar diferentes tipos de variables
 * @var float
 */
$cuarto = 20.99;
var_dump($primero . $segundo . $tercero . $cuarto);

/**
 * En javascript el + se usa para concatenar, pero en PHP + es puramente matemático.
 */
var_dump($primero + $segundo);


$primero = '3';
$segundo = '5';
var_dump($primero + $segundo);

/**
 * Es una buena práctica NO USAR STRINGS EN OPERACIONES MATEMÁTICAS
 */
