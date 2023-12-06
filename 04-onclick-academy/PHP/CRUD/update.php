<!DOCTYPE html>
<html>
<head>
	<title>ACTUALIZACION</title>
</head>
<body>
<?php 

echo "<h1>EDITAR</h1>";
include("links.php");

mysql_connect("localhost","root","") or die("No se ha podido conectar con la base de datos.");
mysql_select_db("crud");

$result = mysql_query("SELECT * FROM usuarios");

echo "<table width='90%' align='center' border=2>";
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
			<td align='center'><a href='edit.php?id=$id&nombre=$nombre&email=$email&password=$pass'>$id</a></td>
			<td>$nombre</td>
			<td>$email</td>
			<td>$pass</td>
	";
}

echo "</table>";

 ?>
</body>
</html>

