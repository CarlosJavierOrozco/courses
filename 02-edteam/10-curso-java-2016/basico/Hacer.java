import java.util.Scanner;

public class Hacer {
    public static void main(String[] args) {
        
        Scanner tecladoString = new Scanner(System.in);
        Scanner tecladoNumber = new Scanner(System.in);

        String continuar;
        int num;


        

        do{
            System.out.println("El juego mas Justo v0.0.1");
            System.out.println("¿Deseas jugar? Digite S si deseas Jugar");
            continuar = tecladoString.nextLine();

            System.out.print("Por favor, digite un numero: ");
            num = tecladoNumber.nextInt();
            System.out.println("Perdiste yo escogi: " + (num + 1));
            System.out.println("Desear continuar? Digita S si deseas continuar.");
            continuar = tecladoString.nextLine();


        }while (continuar.equals("s"));



    }
}
