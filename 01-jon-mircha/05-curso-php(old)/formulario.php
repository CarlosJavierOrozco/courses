<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formularios PHP</title>
</head>
<body>
  <h1>Envio de Datos por GET y POST</h1>

  <h2>Metodo GET</h2>

  <form name="envia-get_frm" action="enviar-datos.php" method="GET" enctype="application/x-www-form-urlencoded">
    <label>
      Ingresa tu nombre: 
      <input type="text" name="nombre">
    </label>
    <br>
    <label>
      Ingresa tu password: 
      <input type="password" name="password">
    </label>
    <br>
    <input type="submit" value="get" name="enviar-get">
  </form>

  <h2>Metodo POST</h2>

  <form name="envia-post_frm" action="enviar-datos.php" method="POST" enctype="application/x-www-form-urlencoded">
    <label>
      Ingresa tu nombre: 
      <input type="text" name="nombre">
    </label>
    <br>
    <label>
      Ingresa tu password: 
      <input type="password" name="password">
    </label>
    <br>
    <input type="submit" value="post" name="enviar-post">
  </form>

</body>
</html>