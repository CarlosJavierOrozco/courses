<?php 
	
	// pot el momento todo esta bien.

	// $_GET muestra los datos en la URL.
	// $_RECUEST

	if ($_POST["nombre"]) {
		if ($_POST["email"]) {
			if ($_POST["tel"]) {
				if ($_POST["pass"]) {
					if ($_POST["cpass"]) {
						if ($_POST["pass"] == $_POST["cpass"]) {
							echo "todo esta bien";
						}else{
							echo "la contraseña no corresponde";
						}

					}else{
						echo "confirma la contraseña";
					}
				}else{
					echo "escribe una contraseña";
				}
			}else{
				echo "escribe un telefono";
			}
		}else{
			echo "escribe un email";
		}
	}else{
		echo "escribe un nombre";
	}

 ?>