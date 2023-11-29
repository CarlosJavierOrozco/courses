//1) Programa una función que cuente el número de caracteres de una cadena de
//texto, pe. miFuncion("Hola Mundo") devolverá 10. Pasar esta funcion a una
//funcion expresada y utilzar las funciones flechas.

function contarCadena(cadena){

  if (!cadena){
    console.warn("No ingresaste ningun caracter")
  }else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
  }

}


//Ejercicio 2 Programa una función que te devuelva el texto recortado según
//el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4)
//devolverá "Hola". 

const recortarCaracter = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste nungun texto")
    : (longitud === undefined)
      ? console.warn("No ingresaste la longitud para recortar el texto")
      : console.info(cadena.slice(0, longitud))


// Ejercicio 3
// 3) Programa una función que
// dada una String te devuelva un Array de textos separados por cierto
// caracter, pe. miFuncion('hola que tal', ' ') devolverá
// ['hola', 'que', 'tal']. 


const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste ningun texto")
    :(separador === undefined)
      ? console.warn("No ingresaste ningun separador")
      : console.info(cadena.split(separador))


// Ejercicio 4 
// 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresaste un texto")
  if (veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto")
  if (veces === 0) return console.error("No puedes repetir un texto cero veces")
  if (Math.sign(veces) === -1) return console.error("No puedes repetir el texto con un numero negativo")

  for (let i = 1; i <= veces; i++) {
    console.info(`${i} : ${texto}`)
  }

}


// Ejercicio 5
// 5) Programa una función que invierta las palabras de una cadena de texto, pe.
// miFuncion("Hola Mundo") devolverá "odnuM aloH". 

const invertirPalabras = (texto = "") =>
  (!texto)
    ? console.warn("No ingresaste nungun texto")
    : console.info(texto.split("").reverse().join(""))

invertirPalabras("las casas")
/*



 6) Programa una función para
 contar el número de veces que se repite una palabra en un texto largo, pe.
 miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 

 7) Programa una
 función que valide si una palabra o frase dada, es un palíndromo (que se lee
 igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 

 8)
 Programa una función que elimine cierto patrón de caracteres de un texto
 dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1,
 2, 3, 4 y 5.
*/