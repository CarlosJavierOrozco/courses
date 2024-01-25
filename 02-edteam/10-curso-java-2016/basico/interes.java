import java.util.Scanner;

public class interes {
    
    public static void main(String[] args) {
        try (Scanner teclado = new Scanner(System.in)) {
            double capitalInicial, tasaInteres, capitalFinal;
            int periodos;

            System.out.println("Programa para calcular el interes compuesto");
            System.out.println("Digite el capital inicial");
            capitalInicial = teclado.nextDouble();
            System.out.println("Digite la tasa de interes en decimales:");
            System.out.println("Ej. 0.10 para diez por ciento");
            tasaInteres = teclado.nextDouble();
            System.out.println("Digite la cantidad de periodos: ");
            periodos = teclado.nextInt();

            for (int i = 1; i <=  periodos; i++) {
                capitalFinal = capitalInicial * Math.pow(1 + tasaInteres, i);
                System.out.println(i + " " + capitalFinal);
            }
        }


    }
}
