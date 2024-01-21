import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class bucles {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String clave = "Carlos";
		String pass = "";
		
		while (!clave.equals(pass)) {
			
			pass = JOptionPane.showInputDialog("Introduce tu contraseña");
			
			if (!clave.equals(pass)) {
				System.out.println("Contraseña incorrecta");
			}
		}
		
		System.out.println("Contraseña correcta, puedes entrar");
		
	}

}
