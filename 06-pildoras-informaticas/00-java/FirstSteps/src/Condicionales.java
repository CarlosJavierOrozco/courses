import java.util.Scanner;

public class Condicionales {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//entrada del programa
		Scanner entrada = new Scanner(System.in);
		//escribir el nombre
		System.out.println("Escribe tu edad");
		int edad = entrada.nextInt();
		// fin entrada del programa
		
		if(edad >= 18) {
			System.out.println("Eres mayor de edad");
		}else {
			System.out.println("eres menos de edad");
		}
		
		
	}

}
