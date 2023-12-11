<?php session_start();     
      if($_GET["nombre"]){
        $title = "Eliminar: ".$_GET["nombre"];
        $h1 = "Eliminar Usuario: ".$_GET["nombre"];
      }else{
        $title = "Usuario ELIMINADO";
        $h1 = "Usuario "."<span class='nombre'>".$_POST['eliminarnombre']."</span>". " ha sido eliminado correctamente";
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
         mysql_connect("localhost","root","") or die("no se ha podido establece coneccion");
         mysql_select_db("nueva");
         mysql_query("DELETE FROM usuarios  WHERE id = $id LIMIT 1;");
         mysql_close();
       
       }
       ?>
  

    <form action="delete-user.php" method="post">
      <label for="nombre">Nombre</label>
      <input disabled type="text" id="nombre" name="eliminarnombre" value="<?php echo $_GET['nombre']?>">
      <label for="email">Email</label>
      <input disabled type="text" id="email" name="eliminaremail" value="<?php echo $_GET['email']?>">
      <label for="password">Password</label>
      <input disabled type="password" id="password" name="eliminarpassword" value="<?php echo $_GET['password']?>">
      <input type="hidden" name="id" value="<?php echo $_GET['id']?>">
      <input type="submit" value="ELIMINAR">
    </form>

   
  </div>
</body>
</html>