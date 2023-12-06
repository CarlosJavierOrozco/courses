<!DOCTYPE html>
<html>
<head>
	<title>REGISTROS</title>
</head>
<body>
	<?php 
	echo "<h1>REGISTROS</h1>";
	include("links.php");


	mysql_connect("localhost","root","") or die("No se ha podido conectar con la base de datos.");
	mysql_select_db("crud");

	$result = mysql_query("SELECT * FROM usuarios");
	$count = 1;

	while ($row = mysql_fetch_array($result)) {
		
		echo "<b>Registro ".$count." </b>"."nombres: ".$row['nombres']." "."email: ".$row['email']."<br>";
			$count++;
	}

 ?>
</body>
</html>

