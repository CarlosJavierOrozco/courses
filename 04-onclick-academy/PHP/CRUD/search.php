<!DOCTYPE html>
<html>
<head>
	<title>Buscar Usuarios</title>
</head>
<body>

	<center>
	<h1>Google DB</h1>
	<form method="get" action="">
		<input type="text" name="search" />
		<input type="submit" name="submit" value="buscar en BD" />
	</form>
</center>
<hr>


<?php 

if (isset($_REQUEST['submit'])) {
	
	$search = $_GET['search'];
	$terms = explode(" ", $search);
	$query = "SELECT * FROM usuarios WHERE ";

	foreach ($terms as $each) {
		
		$i++;

		if ($i == 1 ) {
			
			$query .= "nombres LIKE '%$each%'";
		}else{

			$query .= "OR nombres LIKE '%$each%'";
		}
	}

	mysql_connect("localhost","root","");
	mysql_select_db("crud");

	$queryplus = mysql_query($query);

	$numero = mysql_num_rows($queryplus);

	if ($numero > 0 && $search!="") {
		
		echo "<i style='color:blue;'>$numero resultado(s) encontrados para <b style='color: red;'".">$search</b></i><br/><br/>";

		while ($row = mysql_fetch_assoc($queryplus)) {
			
			$id = $row['id'];
			$nombre = $row['nombres'];
			$email = $row['email'];
			$password = $row['password'];

			echo "<b>".$nombre."</b>"."<br/>";
			echo $email."<br/>";
			echo $password."<br/>";
			echo "<hr>";

		}


	}else{
		echo "no hay resultados!";
	}

}else{
	echo "escribe algo";
} 



?>
</body>
</html>