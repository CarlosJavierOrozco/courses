<?php

require_once 'Producto.php';

// Crea una nueva instancia de Producto
$producto = new Producto;

// Setea las propiedades
$producto->nombre = 'Camiseta de CSS';
$producto->talla = 'L';
//$producto->precio = 12;

// Acceder a las propiedades
// echo $producto->nombre . PHP_EOL;
// echo $producto->talla . PHP_EOL;
// echo $producto->precio . PHP_EOL;


// Crea otra instancia de Producto
$producto2 = new Producto;

$producto2->nombre = 'Camiseta de JS';
$producto2->talla = 'S';
$producto2->precio = 11;

// echo "Otro producto: {$producto2->nombre}.\n";


// echo "El precio de {$producto->nombre} es {$producto->precio}.\n";
// echo "El precio de {$producto2->nombre} es {$producto2->precio}.\n";


$producto->resumen();
$producto2->resumen();
