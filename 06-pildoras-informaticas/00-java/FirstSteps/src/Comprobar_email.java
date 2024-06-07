import javax.swing.JOptionPane;

public class Comprobar_email {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String email = JOptionPane.showInputDialog("Introduce tu email");
		boolean arroba = false;
		
		for(int i = 0; i < email.length(); i++) {

			if(email.charAt(i) == '@') {
				arroba = true;
			}
		}
		
		if(arroba) {
			System.out.println("Tu email: " + email + " es correcto");
		}else {
			System.out.println("Tu email: " + email + " NO es correcto");
		}
	}

}
