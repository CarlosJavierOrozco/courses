package basico;

public class variables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//3.5421519355858043E28
		//3.5421519355858043E28
		double fuerza;
		final double GRAVITACION = 6.67384e-11;
		double masaTierra = 5.972e24;
		double masaSol = 1.989e30;
		double distanciaCuadrado = Math.pow(149600000,2);
		
		fuerza = GRAVITACION * ((masaTierra * masaSol) / distanciaCuadrado);
		
		System.out.println(fuerza);
	
	}

}
