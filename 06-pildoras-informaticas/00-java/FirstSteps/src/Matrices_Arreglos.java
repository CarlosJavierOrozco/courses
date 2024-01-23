
public class Matrices_Arreglos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] mi_matriz = new int[5];
		int [] mi_matriz2 = {3,5,7,-1,23,23};
		
		mi_matriz[0] = 6;
		mi_matriz[1] = -6;
		mi_matriz[2] = 4;
		mi_matriz[3] = 3;
		mi_matriz[4] = 2;
		
		System.out.println("Matriz 1");
		
		for(int i = 0;i<5;i++) {
			System.out.println(mi_matriz[i]);
		}
		
		System.out.println("Matriz 2");
		
		for(int i = 0;i<mi_matriz2.length;i++) {
			System.out.println(mi_matriz2[i]);
		}
		
	}

}
