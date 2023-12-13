<?php  session_start();session_destroy();

header("Refresh: 2; url=index.php");?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ver usuarios</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>




<p class='logout'>¡adios <?php echo $_SESSION["nombre"] . "!";?></p>

</body>