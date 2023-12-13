<div class="header">
<?php
  if (!isset($_SESSION["nombre"])) {
    echo "<a href='index.php'>Iniciar session</a>";
  }else {
    $dir = "./assets/" . $_SESSION['nombre'] . "/";
    $open = opendir($dir);

    while(($file = readdir($open)) != false){
      if (($file != ".") && ($file != "..") && ($file != "...") && ($file != "Thumbs.db")) {
        echo "<img src='$dir$file'>";
      }
      //echo $files;
    }


   
    echo "<a href='usuarios.php'>Hola, " . $_SESSION["nombre"] . "</a>";
  }

 

?>
<a href="form.php">Registrate</a>
<a href="output.php">Ver ususarios</a>
<a href="update.php">Actualizar</a>
<a href="delete.php">Eliminar</a>
<a href="search.php">Buscar</a>


<?php   
      if (!isset($_SESSION["nombre"])) {
        echo "<a'></a>";
      }else {
        echo "<a href='logout.php'>cerrar session</a>";
      }
    


?>
</div>

