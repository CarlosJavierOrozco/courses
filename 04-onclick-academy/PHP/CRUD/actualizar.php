<!DOCTYPE html>
<html>
<head>
	<title>ACTUALIZACION DE DATOS</title>
</head>
<body>

	<h1>ACTUALIZACION DE DATOS</h1>
	<?php 
	include('links.php');

	$id = $_REQUEST["id"];
	$name = $_REQUEST["nuevonombre"];
	$email = $_REQUEST["nuevoemail"];
	$pass = $_REQUEST["nuevapass"];


	mysql_connect("localhost","root","") or die("No se ha podido conectar con la base de datos.");
	mysql_select_db("crud");

	mysql_query("UPDATE usuarios SET nombres='$name', email='$email', password='$pass' WHERE id='$id'");

	echo "se han actualizado correctamente";

	mysql_close();
 ?>

</body>
</html>