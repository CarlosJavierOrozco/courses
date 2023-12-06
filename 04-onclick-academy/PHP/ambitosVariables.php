<?php 
	
	// tutotial por Victor Cruz Bastos

	$var = "global"; // esta variable es global

	function test(){

		$var = "local"; // variable ambito local
		echo $var;

	}

	echo $var;
	echo "<br/>";
	test();
 ?>