<?php

$polos = '4';
var_dump($polos);

// cast a integer
$polos = (int) $polos;
var_dump($polos);

// cast a float
$polos = (float) $polos;
var_dump($polos);

$polos = 3.1416;
// cast a string
$nuevaVariablePolos = (string) $polos;
var_dump($nuevaVariablePolos);

// Los arrays son un caso especial
$nuevaVariablePolos = (array) $nuevaVariablePolos;
var_dump($nuevaVariablePolos);


$polos = 3.58;
$polos = (array) $polos;
var_dump($polos);
