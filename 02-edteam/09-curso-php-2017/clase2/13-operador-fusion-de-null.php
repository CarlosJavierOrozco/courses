<?php

$polo = 'Frase super larga';

/**
 * isset
 *
 * Determinada si una variable está definida y no es null
 */
//var_dump(isset($polo));

/**
 * Si la variable polo está definida y no es null se arroja su valor,
 * de lo contrario arroja "un mensajito".
 */
var_dump(isset($polo) ? $polo : 'Un mensajito');

/**
 * Operador de fusión de null
 */
var_dump($polo ?? 'Un mensajito');
