<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validacion de datos con PHP</title>
</head>
<body>
  <h1>Formularios</h1>
  <?php
    //error_reporting(E_ALL 3TONO E_NOTICE 3TONO E_WARNING);
    if($_GET["error"] == "si"){
      echo "<span style='color: red;'>Verifica tus datos!</span>";
    }
  ?>
  <h2>Metodo GET</h2>
  <form name="envia_get_frm" action="validar-datos.php" method="GET" enctype="application/x-www-form-urlencoded">
    <label>
      Ingresa tu nombre: 
      <input type="text" name="nombre" id="nombre">
    </label>
    <br>
    <label>
      Ingresa tu password: 
      <input type="password" name="password">
    </label>
    <br>
    <span>Sexo:</span>
      
      <label>
        Masculino
        <input type="radio" name="sexo" id="" value="M" id="a">
      </label>
      <label>
        Femenino
        <input type="radio" name="sexo" id="" value="F" id="b">
      </label>
    <br>
    <input type="hidden" name="oculto" value="get">
    <!-- submit envia automaticamente el formulario, button solo se acciona con JS-->
    <input id="get_btn" type="button" value="get" name="enviar-get" id="enviar-get">
  </form>

  <h2>Metodo POST</h2>    
  <form name="envia_post_frm" action="validar-datos.php" method="POST" enctype="application/x-www-form-urlencoded">
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
    <span>Sexo:</span>
      
      <label>
        Masculino
        <input type="radio" name="sexo"  value="M">
      </label>
      <label>
        Femenino
        <input type="radio" name="sexo" value="F">
      </label>
    <br>
    <input type="hidden" name="oculto" value="post">
    <!-- submit envia automaticamente el formulario, button solo se acciona con JS-->
    <input id="post_btn" type="button" value="post" name="enviar-post" id="enviar-post">
  </form>
  <script src="validar-datos.js"></script>
</body>
</html>