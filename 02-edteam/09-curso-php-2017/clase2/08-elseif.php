<?php

$polo = 'PHP';

if ($polo == 'CSS') {
    var_dump('Tengo un polo CSS');
} elseif ($polo != 'JS') {
    var_dump('El polo es de JS');
} elseif ($polo !== 'HTML') {
    var_dump('El polo es de HTML');
} else {
    var_dump('Oh, tengo el polo del nuevo curso!');
}
