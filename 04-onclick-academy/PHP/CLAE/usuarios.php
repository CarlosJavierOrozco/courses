<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>
    <?php  
      if(!isset($_SESSION["nombre"])){echo "Acceso denegado";}else{ echo $_SESSION["nombre"];} 
      ?>
  </title>  
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container"> 
  <?php 

  include("links.php");

  if (!isset($_SESSION["nombre"])) {
    echo "acceso no permitido compa";
    exit;
  }else {
    //include("links.php"); 
    echo "<h1 class='titulos'>Bienvenido " . $_SESSION["nombre"] ."</h1>";
  }  
  ?>



</body>
</html>
 
