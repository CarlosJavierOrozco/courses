<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>subir archivos</title>
</head>
<body>
  <form  action="subir-archivos.php" method="post" enctype="multipart/form-data" name="subir-archivos">
    <input multiple  accept="video/*" type="file" name="archivo" id="archivo">
    <input type="submit" value="enviar video">
  </form>  
</body>
</html>