import javax.swing.JOptionPane;

public class Entrada_Salida_Datos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Introduce tu nombre");
		
		String nombre_usuario = entrada.nextLine();
		
		System.out.println("Introduce tu edad");
		
		int edad = entrada.nextInt();
		
		
		System.out.println("Hola, " + nombre_usuario);
		System.out.println("Tu edad es " + edad);
		
		System.out.println("#########################################");
		*/
		
		String num1 = JOptionPane.showInputDialog("Num1: ");
		String num2 = JOptionPane.showInputDialog("Num2: ");
		int resultado = Integer.parseInt(num1) + Integer.parseInt(num2);
		
		System.out.println("La suma es: " + resultado);
		
		
	}

}
