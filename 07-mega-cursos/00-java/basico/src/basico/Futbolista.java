package basico;

public class Futbolista {
	String nombre;
	String apellido;
	String posicion;
	String DNI;
	double valor;
	
	public Futbolista(String nombre, String apellido, String posicion, String DNI, double valor ) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.posicion = posicion;
		this.DNI = DNI;
		this.valor = valor;
	}
	
	public String getNombre() {
		return nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public String getPosicion() {
		return posicion;
	}
	public String getDNI() {
		return DNI;
	}
	public double getValor() {
		return valor;
	}
	
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public void setPosicion(String posicion) {
		this.posicion = posicion;
	}
	public void setDNI(String dNI) {
		DNI = dNI;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public void setNombre(String nuevoNombre) {
		this.nombre = nuevoNombre;
	}
	
	public double Miltiplica2() {
		String textoLocal = "Por defecto";
		this.setNombre(textoLocal);
		return valor + 100;
	}
}
