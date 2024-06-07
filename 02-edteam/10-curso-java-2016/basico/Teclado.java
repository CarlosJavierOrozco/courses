import java.util.Scanner;

public class Teclado {
    
    public static void main(String[] args) {
        
        Scanner teclado = new Scanner(System.in);
        String nombre;
        
        System.out.print("Por favor digite su nombre");
        nombre = teclado.nextLine();
        System.out.println("Hola " + nombre);
    }
}
