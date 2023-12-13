<?php
    session_start();
    $_SESSION["nombre"] = $_POST["nombre"];
    $_SESSION['password'] = md5($_POST["password"]);

    if ($_POST) {
        # code...
    if ($_SESSION["nombre"] && $_SESSION['password'] ) {
     
        mysql_connect("localhost","root","") or die("No se ha podido conectar");
        mysql_select_db("nueva");
  
        $query = mysql_query("SELECT * FROM usuarios WHERE nombre='".$_SESSION['nombre']."'");
        $dataexist = mysql_num_rows($query);

        if ($dataexist != 0) {
            if ($row = mysql_fetch_assoc($query)) {
                $bdnombre = $row['nombre'];
                $bdpassword = $row['password'];
            }
        }else {
            $location = "location: index.php?error=si?&nombre=". $_SESSION['nombre'] . "";
            header($location);
            session_destroy();
        }

        if ($_SESSION["nombre"] == $bdnombre && $_SESSION['password']  === $bdpassword) {
            header('location: usuarios.php');
        }

        if ($_SESSION['password']  !== $bdpassword && $dataexist) {
            header('location: index.php?badpassword');
            session_destroy();
            exit;
        }

        
        
      
        mysql_close();

      }else{
        echo "<p class'error'>Creo que falta algo... </p>";
        header('location: index.php');
      }}else{
        echo "acceso no permitido";
        exit;
      }
  ?>
