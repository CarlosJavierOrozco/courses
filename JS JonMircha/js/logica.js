//Pasar esta funcion a una funcion expresada y utilzar las funciones flechas.
function contarCadena(cadena){

  if (!cadena){
    console.warn("No ingresaste ningun caracter")
  }else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
  }

}