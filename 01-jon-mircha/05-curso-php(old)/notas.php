<?php
  //echo "hola";
  //funcion que nos muestra la configuracion de nuestro servidor PHP
  //phpinfo();
  echo "estoy aprendiendo php<br>";
  echo "<h1>PHP ES GENIAL</h1>";

  //variables
  $nombre = "Carlos J. Orozco";

  //concatenacion en PHP
  echo "Hola ".$nombre."<br>";

  //aritmetica en PHP

  //tambien puede sumar variables... 
  echo 2+2;

  //escapar caracteres
  $numero = 200;
  echo "<br>La variable $numero tiene el valor de $numero";

  //modulo-- saber si un numero es par o impar

  $num = 5;
  $modulo = $num % 2;
  echo "<br>";
  if ($modulo == 0){
    echo "El numero $num es un numero par";
  }else{
    echo "El numero $num es un numero impar";
  }

  echo "<br>";

  for($i=0;$i<=10;$i++){
    echo $i."<br>";
  }
?>