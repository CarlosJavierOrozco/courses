<?php  session_start();?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ver usuarios</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <?php include("links.php"); ?>
<h1 class="titulos">Ver Todos los usuarios</h1>
  <?php
    
   if (!isset($_SESSION["nombre"])) {
    echo "acceso no permitido compa";
    exit;
  }else {

    mysql_connect("localhost","root","") or die("No se ha podido conectar");
    mysql_select_db("nueva");

    
    $por_pagina = 20;
    $pagina_query = mysql_query("SELECT COUNT('id') FROM usuarios");
    $paginas = ceil(mysql_result($pagina_query,0) / $por_pagina); // cantidad de usuarios
    $pagina = (isset($_GET['pagina'])) ?(int)$_GET['pagina'] : 1;
    $start = ($pagina - 1) * $por_pagina;
    $resultado = mysql_query("SELECT * FROM usuarios LIMIT $start, $por_pagina");

    echo "<table class='tabla'>";
    echo "<tr>
            <td>ID</td>
            <td>NOMBRE</td>
            <td>EMAIL</td> 
            <td>CONTRASEÑA</td>
         </tr>";
    
    while($row = mysql_fetch_assoc($resultado)){
      $id = $row["id"];
      $nombre = $row["nombre"];
      $email = $row["email"];
      $password = $row["password"];
  
      echo "<tr>
            <td>$id</td>
            <td>$nombre</td>
            <td>$email</td> 
            <td>$password</td>
         </tr>";
    }
  
  
    echo "</table>";

    

    $anterior = $pagina - 1;
    $siguiente = $pagina + 1;

    if (!($pagina <= 1)) {
      echo '<a class="page-links" href="output.php?pagina=' . $anterior . '"><=</a>';
    }


    if ($paginas >= 1) {
      for ($i=1; $i <= $paginas ; $i++) { 
        echo ($i == $pagina) ? "<a class='page-links current' href='?pagina=" . $i . "'>" . $i . "</a>" : "<a class='page-links' href='?pagina=" . $i . "'>" . $i . "</a>";
      }
    }

    if (!($pagina >= $paginas)) {
      echo '<a class="page-links" href="output.php?pagina=' . $siguiente . '">=></a>';
    }

    mysql_close();
  }
  ?>

</div>
</body>
</html>

