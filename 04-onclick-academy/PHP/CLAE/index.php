<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi CRUD 1.0</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container index">

    <?php include("links.php");?> 
    <?php
      if (isset($_GET["error"])) {
        $error = "Este usuario no existe";
      }

      if (isset($_GET["nombre"])) {
        $nuevonombre = $_GET["nombre"];
        $registrar = "<a class='links' href='form.php?nombre=$nuevonombre'>¿Deseas registrarlo?</a>";
      }

      if (isset($_GET["badpassword"])) {
        //$nuevonombre = $_GET["nombre"];
        $mensaje = "La contraseña es incorrecta!";
      }


    ?>
    <h1 class="titulos">Bienvenido a mi Portal CRUD</h1>
    <h2 class="titulos">inicia sesion</h2>
  <form action="login.php" name="users" method="POST">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" required maxlength="30">
    <span class="error"><?php echo $error; echo $registrar;?></span>
    <label for="password">Contraseña</label>
    <input type="password" name="password" id="password" required maxlength="32"> 
    <span class="error"><?php echo $mensaje;?></span>
    <input type="submit" value="iniciar sesion">
    <a class="links" href="form.php">Registrarse</a>
  </form>

  </div>
</body>
</html>