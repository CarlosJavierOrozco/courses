import java.util.Scanner;

public class Adivina_Numero {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		double r = Math.random()*100;
		
		int aleatorio = (int)r;
		int numero = 0;
		int intentos = 0;
		@SuppressWarnings("resource")
		Scanner entrada = new Scanner(System.in);
		
		while(numero != aleatorio) {
			intentos++;
			System.out.println("Digita un numero");
			numero = entrada.nextInt();
			
			if (numero < aleatorio) {
				System.out.println("El numero es mas alto");
			}else if (numero > aleatorio) {
				System.out.println("El numero es mas bajo");
			}
		}
		
		System.out.println("Correcto, lo lograste en " + intentos + " intentos");
		
		
	}

}
