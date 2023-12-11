<?php
  foreach($_FILES["archivo"] as $clave => $valor) {
    echo "Propiedad: " . $clave;
    echo "&nbsp;&nbsp;&nbsp;";
    echo "Valor: <b>" . $valor . "</b>";
    echo "<br>";
  } 


  $archivo = $_FILES["archivo"]["tmp_name"];
  $destino = "files/". $_FILES["archivo"]["name"];

  move_uploaded_file($archivo,$destino);
  echo "archivo subido";
 //$archivo = $_FILES["archivo"]["tmp_name"];
 //$archivo = $_FILES["archivo"]["tmp_name"];
?>