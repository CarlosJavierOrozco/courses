class Persona{
    
    String nombre;
    byte edad;
    float peso;
    float estarura;

    public Persona(){}
    
    void hablar(){
        System.out.println("Hola amigos");
    }

    void comer(){
        System.out.println("Estoy comiendo");
    }

    
    String getNombre(){
        return nombre;
    }

    void setNombre(String nombre){
        this.nombre = nombre;
    }


}