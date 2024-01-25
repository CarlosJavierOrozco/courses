Algoritmo SumarNumeroPares
	//  Elaborar un flujograma que muestre la suma y la serie de los números pares comprendidos entre 10 y 20, (estructura repetir).
	Definir  contador, sum Como Entero;
	contador <- 10;
	sum <- 0;
	
	Repetir
		contador <- contador+2;
		sum <- sum+contador;
		Escribir  "-", contador;
	Mientras  Que  contador > 10 Y contador <= 16
	
	Escribir  "Suma de Pares = ", sum;
	
	
FinAlgoritmo