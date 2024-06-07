Algoritmo almacen	
	Definir  compra Como Entero;
	Definir bolita Como Entero;
	Definir  desc Como Real;
	Definir  color Como Caracter;
	Definir  pago Como Real;
	desc <- 0;
	Escribir  "Ingrese el valor de su compra";
	
	Leer compra;
	
	Escribir "Seleccione segun el color de la bolita";
	
	Escribir "1. ROJO";
	Escribir "2. AZUL";
	Escribir "3. VERDE";
	Escribir "4. BLANCO";
	
	Leer bolita; 
	
	Segun bolita Hacer
		1:
			desc <- compra;
			color <- "ROJA";
		2:
			desc <- compra * 0.50;
			color <- "AZUL";
		3:
			desc <- compra * 0.25;
			color <- "VERDE";
		4:
			desc <- 0;
			color <- "BLANCO";
		De Otro Modo:
			Escribir "Ese color de bolita no existe";
	Fin Segun
	
	pago <- compra - desc;
	Escribir "El cliente paga por su compra ", pago , "$";
FinAlgoritmo
