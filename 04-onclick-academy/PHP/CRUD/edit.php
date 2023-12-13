<!DOCTYPE html>
<html>
<head>
	<title>EDITAR USUARIO</title>
</head>
<body>

<?php 

	echo "<h1> EDITAR USUARIO: <span>".$_REQUEST['nombre']."</span></h1>"; 
	include("links.php");

?>

	<form method="" action="actualizar.php">
		<table border=1 width="60%">
			<tr>
				<td width="30%">Nombre :</td>
				<td width="30%"><input type="text" name="nuevonombre" value="<?php echo $_REQUEST['nombre']?>" /></td>
			</tr>
			<tr>
				<td width="30%">Email :</td>
				<td width="30%"><input type="text" name="nuevoemail" value="<?php echo $_REQUEST['email']?>" /></td>
			</tr>
			<tr>
				<td width="30%">Contraseña :</td>
				<td width="30%"><input type="text" name="nuevapass" value="<?php echo $_REQUEST['password']?>" /></td>
			</tr>
		</table>
		<input type="submit" name="submit" value="actualizar">
		<input type="hidden" name="id" value="<?php echo $_REQUEST['id'] ?>">
	</form>
</body>
</html>