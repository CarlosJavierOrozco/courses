<?php

/**
 * La sentencia switch es similar a la sentencia if,
 * excepto que no se usa una condición sino un valor
 * que se desea comparar.
 *
 * Se pueden muchos case.
 *
 * Si no se agrega el break como sentencia final de un case
 * se ejecutan todas las sentencias de los case siguientes.
 *
 * default: caso especial cuando ninguno de los casos
 * anteriores coincide.
 *
 */

$polo = 'PHP';

switch ($polo) {
    case 'CSS':
        var_dump('Tengo un polo CSS');
        break;

    case 'JS':
        var_dump('Tengo un polo JS');
        break;

    case 'HTML':
        var_dump('Tengo un polo HTML');
        break;

    default:
        var_dump('Ninguno de los casos coincide');
}
