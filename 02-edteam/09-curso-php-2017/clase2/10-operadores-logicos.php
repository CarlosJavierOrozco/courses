<?php

/**
 * Operadores lógicos
 *
 * and
 * &&
 * or
 * ||
 * !
 * xor
 */

$a = true;
$b = false;
$polo = 'CSS';

/**
 * and
 *
 * Devuelve true si ambos son true
 */
//var_dump(true and true);
//var_dump((5 > 2) and ($polo == 'CSS'));

/**
 * &&
 *
 * Devuelve true si ambos son true
 */
//var_dump(false && true);

/**
 * or
 *
 * Devuelve true si cualquiera de los dos es true
 */
//var_dump(true or true);

/**
 * ||
 *
 * Devuelve true si cualquiera de los dos es true
 */
//var_dump(false || true);

/**
 * !
 *
 * Devuelve true si el operando no es true
 */
//var_dump(!true);

/**
 * xor
 *
 * Devuelve true si uno de los operandos es true, no ambos
 */
var_dump(false xor false);
