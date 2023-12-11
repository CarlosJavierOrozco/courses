<?php 
	
	//arrays asociativo

	$misDatos = array("nombre" => "Carlos J. Orozco", "Edad:"=> 27);

	echo $misDatos["nombre"]." | ";

	//arrays multidimencionales

	$misDatos2 = array("Carlos J. Orozco",array(27,array("26-04-91")));

	echo "Mi fecha de Nacimiento: ".$misDatos2[1][1][0]

?>