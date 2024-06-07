public class Condicionales01 {
    /**
     * @param args
     */
    public static void main(String[] args) {
        
        if (6==6) {
            System.out.println("la condicion se cumple");

        } else if (5 == 5) {
            System.out.println("la condicion se cumple, 5 == 5");
        }

        // operador logico booleano &
        // no es igual a &&, este ultimo utiza la operacion corto circuito
        // si el de la izquirda es falsa ya no evalua la expresion de la derecha
        // falso verdadero no evalua el segundo
        // verdadero falso se evalua ambos

        // operador ternario 
        // condicion ? V : F;

        System.out.println(4 < 5 ? "4 ES MENOR QUE 5" : "NO SE CUMPLE");

        byte dia = 5;
        switch (dia) {
            case 1:
                System.out.println("Lunes");
                break;
            case 2:
                System.out.println("Martes");
                break;
            case 3:
                System.out.println("Miercoles");
                break;
            case 4:
                System.out.println("Jueves");
                break;
            case 5:
                System.out.println("Viernes");
                break;
            case 6:
                System.out.println("Sabado");
                break;
            case 7:
                System.out.println("Domingo");
                break;
            default:
                System.out.println("Ese dia no existe");
                break;
        }

        

    }
}
