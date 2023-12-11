<?php  session_start();?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eliminar Usuarios</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">

  <?php include("links.php");?>

  <h1 class="titulos">eliminar usuario</h1>
  <?php

  
if (!isset($_SESSION["nombre"])) {
  echo "acceso no permitido compa";
  exit;
}else {


  mysql_connect("localhost","root","");
  mysql_select_db("nueva");
  
  $resultado= mysql_query("SELECT * FROM  usuarios");

  echo "<table class='tabla'>";
  echo "<tr>
          <td>ID</td>
          <td>NOMBRE</td>
          <td>EMAIL</td> 
          <td>CONTRASEÑA</td>
       </tr>";
  
  while($row = mysql_fetch_array($resultado)){
    $id = $row["id"];
    $nombre = $row["nombre"];
    $email = $row["email"];
    $password = $row["password"];

    echo "<tr>
          <td><a href='delete-user.php?id=$id&nombre=$nombre&email=$email&password=$password'>$id</a></td>
          <td>$nombre</td>
          <td>$email</td> 
          <td>$password</td>
       </tr>";
  }


  echo "</table>";

  mysql_close();
}
?>  

</div>
</body>
</html>
