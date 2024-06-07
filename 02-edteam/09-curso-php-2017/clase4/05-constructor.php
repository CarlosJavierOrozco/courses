<?php

require_once 'Producto.php';

$producto1 = new Producto('Camiseta de HTML', 'L');
$producto2 = new Producto('Camiseta de JS', 'S');
$producto3 = new Producto('Camiseta de CSS', 'M');
$producto4 = new Producto('Camiseta de PHP', 'L');

echo $producto1->nombre . PHP_EOL;
echo $producto2->nombre . PHP_EOL;
echo $producto3->nombre . PHP_EOL;
echo $producto4->nombre . PHP_EOL;
