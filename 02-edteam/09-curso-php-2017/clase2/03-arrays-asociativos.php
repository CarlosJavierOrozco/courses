<?php
/**
 * Los array asociativos tienen llaves definidas por el programador.
 *
 * Todas las llaves de un array asociativo deben ser strings
 */
$numeros = [
    'uno'       => 1,
    'dos'       => 2,
    'tres'      => 3,
    'cuatro'    => 4,
    'cinco'     => 5,
    'seis'      => 6,
];

//var_dump($numeros);

// Las llaves son las llaves
var_dump($numeros['tres']);
var_dump($numeros['cinco']);
