<?php  session_start();    
      if($_GET["nombre"]){
        $title = "Editar: ".$_GET["nombre"];
        $h1 = "Editar Usuario: ".$_GET["nombre"];
      }else{
        $title = "Usuario actualizado";
        $h1 = "Usuario "."<span class='nombre'>".$_POST['nuevonombre']."</span>". " actualizado correctamente";
      }
    ?>
  
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title;?></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>



  <div class="container">
    <?php include("links.php");?>
    <h1 class="titulos"><?php echo $h1;?></h1>   
    <?php 
            if (!isset($_SESSION["nombre"])) {
              echo "acceso no permitido compa, no puede eliminar nada";
              exit;
            }else {

      $id = $_POST["id"];
      $nombre = $_POST["nuevonombre"];
      $email = $_POST["nuevoemail"];
      $password= md5($_POST["nuevapassword"]);

      mysql_connect("localhost","root","") or die("no se ha podido establece coneccion");
      mysql_select_db("nueva");
      mysql_query("UPDATE usuarios SET nombre = '$nombre', email = '$email', password = '$password' WHERE id = $id LIMIT 1;");
      mysql_close();
            }
    ?>

    <form action="edit.php" method="post">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nuevonombre" value="<?php echo $_GET['nombre']?>">
      <label for="email">Email</label>
      <input type="text" id="email" name="nuevoemail" value="<?php echo $_GET['email']?>">
      <label for="password">Password</label>
      <input type="password" id="password" name="nuevapassword" value="<?php echo $_GET['password']?>">
      <input type="hidden" name="id" value="<?php echo $_GET['id']?>">
      <input type="submit" value="antualizar">
    </form>

  
  </div>
</body>
</html>