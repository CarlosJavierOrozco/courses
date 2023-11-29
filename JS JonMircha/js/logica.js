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


//Ejercicio 6 
// 6) Programa una función para
// contar el número de veces que se repite una palabra en un texto largo, pe.
// miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 

const textoEnCadena = (cadena = "", buscar = "") =>{
  if (!cadena) return console.warn("No ingresaste ningun texto")
  if (!buscar) return console.warn("No ingresaste ninguna palabra a buscar")

  let i = 0
  let contador = 0

  while (i !== -1) {
    i = cadena.indexOf(buscar, i)
    if (i!==-1) {
      i++
      contador++
    }
  } 
  // colocar alguna condicion para que cuando el texto aparezca "1 vez" no diga "1 veces"
  return console.info(`El texto aparecio ${contador} veces`)
}



// Ejercicio 7
// 7) Programa una
// función que valide si una palabra o frase dada, es un palíndromo (que se lee
// igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 


const palindromo = (palabra = "") =>{
  if (!palabra) return console.warn("No ingresaste una palabra o frase")

  palabra = palabra.toLowerCase()

  let alReves = palabra.split("").reverse().join("")

  return (palabra === alReves)
    ? console.info(`Si, si es palindromo. Palabra Origina: ${palabra}, palabra al reves: ${alReves}`)
    : console.info(`No, no es palindromo. Palabra Origina: ${palabra}, palabra al reves: ${alReves}`)
}


// Ejercicio 8
// 8)
// Programa una función que elimine cierto patrón de caracteres de un texto
// dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1,
// 2, 3, 4 y 5.


const eleminarCaracter = (texto = "", patron = "") => 
  (!texto)
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingresaste un patron")
      : console.info(texto.replace(new RegExp(patron, "ig"), ""))

eleminarCaracter("carlos","l")