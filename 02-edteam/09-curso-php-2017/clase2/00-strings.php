<?php

$nombreProducto = 'Polo de CSS';
var_dump($nombreProducto);

$nombreProducto = "Polo de CSS";
var_dump($nombreProducto);

$valor = 'Polo de JS';

$primero = 'Quiero un $valor!';
var_dump($primero);

$segundo = "Quiero un $valor";
var_dump($segundo);

// Buena práctica, forma más legible y útil cuando estemos usando arrays.
$resultado = "Resultado: Quiero un {$valor}";
var_dump($resultado);
