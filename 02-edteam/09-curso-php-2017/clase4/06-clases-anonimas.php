<?php

require_once 'Fabrica.php';

$fabrica = new Fabrica();

$mesa1 = $fabrica->fabricarMesa('Marrón', 4);
$mesa2 = $fabrica->fabricarMesa('Negro', 8);

echo 'La mesa 1 es de color ' . $mesa1->getColor() .
        ' y tiene ' . $mesa1->getPatas() . ' patas.' . PHP_EOL;

echo 'La mesa 2 es de color ' . $mesa2->getColor() .
        ' y tiene ' . $mesa2->getPatas() . ' patas.' . PHP_EOL;
