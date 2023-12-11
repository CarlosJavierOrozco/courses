<!DOCTYPE html>
<html>
<head>
	<title>CRUD PHP</title>
</head>
<body>


<?php 

	$name = $_POST["nombre"];
	$email = $_POST["email"];
	$pass = $_POST["pass"];
	$cpass = $_POST["cpass"];

	if ($name && $email && $pass && $cpass) {

		if (strlen($pass) > 4) {
		
		

		if ($cpass == $pass) {
			// conectamos con Mysql

			mysql_connect("localhost","root","") or die("No se ha podido conectar con la base de datos.");
			mysql_select_db("crud");

			// no permitir que se agregue dos usuarios con el mismo nombre.

			$usuario = mysql_query("SELECT nombres FROM usuarios WHERE nombres='$name'");

			// si el usuario exite arroja 1 y si no 0
			$count = mysql_num_rows($usuario);

			$remail = mysql_query("SELECT email FROM usuarios WHERE email='$email'");
			$checkmail = mysql_num_rows($remail);

			if ($checkmail!=0) {
				echo "<h1>EMAIL YA EXITE!</h1>";
				include("links.php");
				die();

			}else{
				echo "email no exite";
					

			if ($count != 0) {

				echo "<h1> El USUARIO: <span style='color: red;'>".$_REQUEST['nombre']."</span> YA EXISTE.</h1>"; 
				include("links.php");
					echo "Prueba registrar otro nombre.";

			}else{

			mysql_query("INSERT INTO usuarios(nombres,email,password) VALUES('$name','$email','$pass')");
			$registro = mysql_affected_rows();
			echo "<h1>".$registro." USUARIO HA SIDO AGREGADO. </h1>";
			include("links.php");
			}
			}

		}else{
			echo "<h1>Las contraseñas no coisiden!</h1>";
			include("links.php");

		}
	}else{
		echo "<h1>Las contraseña es demaciado pequeña!</h1>";
		include("links.php");
	}


	}else{
		echo "<h1>completa el formulario</h1>";
		include("links.php");
	}




//	mysql_close();

 ?>




 </body>
</html>