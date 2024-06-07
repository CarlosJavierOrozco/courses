<?php declare(strict_types = 1);

/**
 * Return type declaration
 *
 * Podemos indicar el tipo de dato que retorna una función
 */

//$numero = 7;

function suma(int $x, int $y) : int
{
    //global $numero;

    return $x + $y;
}

//var_dump(suma(2,6));
