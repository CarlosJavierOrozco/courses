<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<h1>REGISTRARSE</h1>
	<?php include("links.php"); ?>

	<form method="post" action="insert.php">
		<table>
			<tr>
				<td>Nombre:</td> 			
				<td><input type="text" name="nombre" maxlength=30 /></td>
			</tr>
			
			<tr>
				<td>Email:</td> 
				<td><input type="text" name="email" maxlength=30 />	</td>
			</tr>
			<tr>
				<td>Password: </td>
				<td><input type="password" name="pass" maxlength=32 /> </td>
			</tr>
			<tr>
				<td>Confirmacion de Password: </td>
				<td><input type="password" name="cpass" /> </td>
			</tr>
			<tr>
				<td><input type="submit" value="enviar"></td>
			</tr>
		</table>
	</form>


</body>
</html>