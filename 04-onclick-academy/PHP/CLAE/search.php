<?php  session_start();?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buscar en la BD</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">

  <?php include("links.php");?>

  <h1 class="titulos">Buscar en la base de datos</h1>

  <form action="" method="GET">
    <input type="search" name="search" id="">
    <input type="submit" value="buscar" name="submit">
  </form>

  <?php
  //error_reporting(E_ERROR | E_WARNING | E_PARSE);
  
  if (!isset($_SESSION["nombre"])) {
    echo "<hr>";
    echo "No puedes realiazar ninguna busqueda";
    exit;
  }else {

  
  if (isset($_GET["submit"])) {
   // $mensaje =  "<h2>Resultados para ".$_GET['search']."</h2>";
    
    if (!$_GET["search"]) {
      $mensaje = "<h2>Me parece que algo falta...</h2>";
    }
    echo "<hr>";
    echo $mensaje;

    $search = $_GET['search'];
    $terms = explode(' ', $search);
    $query = "SELECT * FROM usuarios WHERE ";

    foreach ($terms as $each) {      
      $i++;
      if ($i == 1) {
        $query.="`nombre` LIKE '%$each%'";
      }else{
        $query.="OR `nombre` LIKE '%$each%'";
      }

    }
   
    mysql_connect("localhost","root","") or die("no se ha podido establecer coneccion");
    mysql_select_db("nueva");

    $queryplus = mysql_query($query);
    $numero = mysql_num_rows($queryplus);

    if ($numero > 0 && $search != "") {
      $mensaje = "<h2>$numero resultado(s) en contrado(s) para <span class='nombre'>$search</span></h2>";
      echo $mensaje;
      echo "<table class='tabla'>";
      echo "<tr>
              <td>ID</td>
              <td>NOMBRE</td>
              <td>EMAIL</td> 
              <td>CONTRASEÑA</td>
           </tr>";
      while($row = mysql_fetch_assoc($queryplus)){
        $id = $row['id'];
        $nombre = $row['nombre'];
        $email = $row['email'];
        $password = $row['password'];
        
        echo "<tr>
        <td>$id</td>
        <td>$nombre</td>
        <td>$email</td> 
        <td>$password</td>
     </tr>";
     
    }
    echo "</table>";}else{
      $noresult = "<p class='error'>Lo sentimos, no hay resultado para $search</p>";
      if ($search=="") {
        $noresult = NULL;
      }
      echo $noresult;
    }
    mysql_close();  
    }
  }
  
?>  

</div>
</body>
</html>
