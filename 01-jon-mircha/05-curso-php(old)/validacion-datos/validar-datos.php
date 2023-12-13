<?php
    $USER = "CarlosJOrozco";
    $PASS = "123456";

    if (isset($_GET["oculto"])) {
        if($USER === $_GET["nombre"] && $PASS === $_GET["password"]){
            echo "El nombre que ingresaste por GET es ".$_GET["nombre"];
            echo "<br>Tu password es:  ".$_GET["password"];
            echo "<br>Tu sexo es:  ".$_GET["sexo"];
        }else{
            //echo "No estas registrado...";
            header("Location: formulario.php?error=si");
        }
    }else if (isset($_POST["oculto"])) {
        if($USER === $_POST["nombre"] && $PASS === $_POST["password"]){
            echo "El nombre que ingresaste por POST es ".$_POST["nombre"];
            echo "<br>Tu password es:  ".$_POST["password"];
            echo "<br>Tu sexo es:  ".$_POST["sexo"];
        }else{
            //echo "No estas registrado...";
            header("Location: formulario.php?error=si");
        }
    }
?>