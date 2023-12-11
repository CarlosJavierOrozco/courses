<!DOCTYPE html>
<html>
<head>
	<title>ACTUALIZACION</title>
</head>
<body>
<?php 

echo "<h1>ELIMINAR</h1>";
include("links.php");

mysql_connect("localhost","root","") or die("No se ha podido conectar con la base de datos.");
mysql_select_db("crud");

$result = mysql_query("SELECT * FROM usuarios WHERE id='".$_REQUEST['id']."'");

echo "<table width='90%' align='center' border=1>";
echo "
<tr>
<td width='10%' align='center' bgcolor='#FFFF00'>ID</td>
<td width='30%' align='center' bgcolor='#FFFF00'>NOMBRES</td>
<td width='30%' align='center' bgcolor='#FFFF00'>EMAIL</td>
<td width='20%' align='center' bgcolor='#FFFF00'>PASSWORD</td>
</tr>";

while ($row = mysql_fetch_array($result)) {
		
	$id = $row['id'];
	$nombre = $row['nombres'];
	$email = $row['email'];
	$pass = $row['password'];

	echo "<tr>
			<td align='center'>$id</td>
			<td>$nombre</td>
			<td>$email</td>
			<td>$pass</td>
	";
}

echo "</table>";

 ?>

 <form method="post" action="del_form.php">
 	<p>¿Estas seguro de querer eliminar este registro?</p>
 	<input type="submit" name="submit" value="SI" />
 	<a href="delete.php">NO, volver.</a>
 	<input type="hidden" name="id" value="<?php echo $_REQUEST['id']; ?>" />
 </form>
</body>
</html>

