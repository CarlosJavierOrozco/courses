
public class Manejo_Strings {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String nombre = "Carlos";
		String frase = "Hoy es un muy buen dia para programar";
		
		System.out.println("Mi nombre es " + nombre);
		
		System.out.println("Y tiene " + nombre.length() + " letras");
		
		System.out.println("La primera letra es " + nombre.charAt(0));
		
		int ultima_letra = nombre.length();
		
		System.out.println("La ultima letra es la " + nombre.charAt(ultima_letra - 1));
	
		String frase_corta = frase.substring(1,3);
		
		System.out.println(frase_corta);
		
		System.out.println(nombre.equals(frase));
		System.out.println(nombre.equalsIgnoreCase(frase));
	
	
	
	
	}

}
