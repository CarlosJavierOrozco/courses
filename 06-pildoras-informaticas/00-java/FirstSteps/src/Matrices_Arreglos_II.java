import javax.swing.JOptionPane;

public class Matrices_Arreglos_II {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String [] paises = {"Venezuela","Colombia","EEUU","Alemania"};

		System.out.println("Imprimir matriz 1");
		
		for (String i:paises) {
			System.out.println("Pais: " + i);
		}
		
		System.out.println("Imprimir matriz 2");
		
		String [] hermanas = new String[3];
		
		for(int i = 0; i < 3; i++) {
			hermanas[i] = JOptionPane.showInputDialog("Hermana " + (i+1) + ":" ); 
		}
		for (String i:hermanas) {
			System.out.println("Hermana: " + i);
		}
	
	}

}
