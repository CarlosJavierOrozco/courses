<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi CRUD 1.0 | REGISTRO</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container index">
  
   <?php include("links.php");?> 
  <?php
    if (isset($_GET['nombre'])) {
      $nuevoNombre = $_GET['nombre'];
    }
  ?>

  <h1 class="titulos">registrate</h1>
  <form enctype="multipart/form-data" action="form.php" name="users" method="POST">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" required maxlength="30" value="<?php echo $nuevoNombre; ?>">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required maxlength="30">
    <label for="password">Contraseña</label>
    <input type="password" name="password" id="password" required maxlength="32"> 
    <label for="cpassword">Confirmar contraseña</label>
    <input type="password" name="cpassword" id="cpassword" required maxlength="32">
    <input type="hidden" name="MAX_FILE_SIZE" value="100000">
    <label for="up">Foto de perfil</label>
    <input type="file" name="upload" id="up">
    <input type="submit" value="enviar">

  </form>

  <?php

    $mypic = $_FILES["upload"]["name"];
    $temp = $_FILES["upload"]["tmp_name"];
    $type = $_FILES["upload"]["type"];
   // $mypic = $_FILES["upload"]["name"];

    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];
    $validmail = false;
    $md5password = md5($password);

    if ($nombre && $email && $password && $cpassword) {
      
      if(preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $email)){
        $validmail = true;
      }else{
        die("<p class='error'>Debes ingresar un email valido</p>");
      }

      if ($password === $cpassword) {

        mysql_connect("localhost","root","") or die("No se ha podido conectar");
        mysql_select_db("nueva");
  
        $query1 = mysql_query("SELECT nombre FROM usuarios WHERE nombre = '$nombre'");
        $nameExist = mysql_num_rows($query1);
        $query2 = mysql_query("SELECT email FROM usuarios WHERE email = '$email'");
        $emailExist = mysql_num_rows($query2);
        
        if ($nameExist || $emailExist) {
          die("<p class='error'>nombre o email existentes en la base de datos</p>");
        }
        
        if (strlen($password) <8 || strlen($password) > 32) {
          die("<p class='error'>la contraseña debe tener minumo 8 caracteres y maximo 32 caracteres</p>");
        }

        if (($type == "image/jpeg") || ($type == "image/jpg") || ($type == "image/png") || ($type == "image/bmp")) {
         
          $dir = "./assets/" . $nombre . "/";
          mkdir($dir,0777,true);
          move_uploaded_file($temp,"assets/$nombre/$mypic");
          
        }

        mysql_query("INSERT INTO usuarios(nombre,email,password) VALUES('$nombre','$email','$md5password')");
        $registro = mysql_affected_rows();
        
        if ($registro) {
          echo "<p class='mensaje'>".$nombre.", haz sido registrado exitosamente"."</p>";
          echo "<img src='assets/$nombre/$mypic'>";
        }else{
          echo "<p>Lo lamentamos! el usuario ".$nombre." no se ha podido registrar"."</p>";
        }
  
        mysql_close();
      }else{
        echo "<p class'error'>Lo lamentamos! las contraseñas no coinciden</p>";

      }
     
    }

    
  ?>
  </div>
</body>
</html>