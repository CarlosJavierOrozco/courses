<?php
    //variables globales
    //variable de tipo arreglo $_GET y $_POST

    //isset() nos evalua si se ha definido una variable 

    if(isset($_GET["enviar-get"])){
        echo "Los datos los enviaste por el metodo GET"."<br>";
        echo "Los datos son: "."<br>";
        echo "nombre: ".$_GET["nombre"]."<br>";
        echo "password: ".$_GET["password"]."<br>";
    }else if(isset($_POST["enviar-post"])){
        echo "Los datos los enviaste por el metodo POST"."<br>";
        echo "Los datos son: "."<br>";
        echo "nombre: ".$_POST["nombre"]."<br>";
        echo "password: ".$_POST["password"]."<br>";
    }
?>