<?php

/**
 * Parámetros
 *
 * Son valores que recibe la función
 *
 * Una función puede tener uno o más parámetros.
 */

function saludar($nombre)
{
    echo "Hola {$nombre}.\n";
}

saludar('Daniel');
saludar('Luis');
saludar('Carlos');
saludar(5.1);

function sumar($numero1, $numero2, $numero3)
{
    return $numero1 + $numero2 + $numero3;
}

echo sumar(4, 5, 1);
// Imprime el caracter de fin de línea del sistema operativo actual.
echo PHP_EOL;


function bienvenida()
{
    // array con todos los parámetros de la función.
    $nombres = func_get_args();

    // Iteramos los nombres.
    foreach ($nombres as $nombre) {
        echo "Bienvenido, {$nombre}.\n";
    }
}

//bienvenida('Ricardo', 'Alan', 'Alvaro', 'Fabian');
bienvenida('Ricardo', 'Alan', 'Fabian');
