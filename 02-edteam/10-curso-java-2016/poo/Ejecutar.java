class Ejecutar {
    public static void main(String[] args) {
        
        Persona carlos = new Persona();

        carlos.setNombre("Carlos");
        carlos.edad = 32;
        carlos.peso = 70f;
        carlos.estarura = 1.6f;

        carlos.hablar();
        System.out.println("Mi nombre es " + carlos.getNombre());
        carlos.comer();
    }    
}
