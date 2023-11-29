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


//Ejercicio 9
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600. 

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500)


//Ejercicio 10
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se
//lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un numero")
  if (typeof numero !== "number") return console.error("El dato que ingresaste no es un numero")


  numero = numero.toString()
  let numAlReves = numero.split("").reverse().join("")

  return (numero === numAlReves)
    ? console.info(`Si, el numero es capicua. Numero Origina: ${numero}, numero al reves: ${numAlReves}`)
    : console.info(`No, el numero no es capicua. Numero Origina: ${numero}, numero al reves: ${numAlReves}`)
}



/*
Ejercicio 11)
Programa una función que calcule el factorial de un número (El factorial de
un entero positivo n, se define como el producto de todos los números enteros
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
// Optimizar el codigo para que no consuma tanto recursos.

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero")
  if (typeof numero !== "number") return console.error("El dato que ingresaste no es un numero")

  // validar que no sea 0.

  // validar que no sea negativo

  let factorial = 1

  for (let i = numero; i > 1;i--) {
    factorial *= i
  }

  return console.info(`El factorial de ${numero} es de ${factorial}`)

}


//Ejercicio 12
//12) Programa una función que determine si un número es primo (aquel que solo
//es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero")
  if (typeof numero !== "number") return console.error("El dato que ingresaste no es un numero")

  // validar que no sea 0.
  // valida que no sea 1
  // validar que no sea negativo

  let divisible = false

  for (let i = 2; i < numero; i++) {
    if ((numero % i === 0)) {
      divisible = true
      break;
    }
  }

  return (divisible)
    ? console.log(`El numero ${numero}, no es primo`)
    : console.log(`El numero ${numero}, si es primo`)
}




//Ejercicio 13)
//Programa una función que determine si un número es par o impar, pe. miFuncion
//(29) devolverá Impar. 

const numeroParImpar = (numero = undefined) => {
  //validar si es undefined
  //validar el tipo de dato

  return ((numero % 2) === 0)
    ? console.info(`El nuemro ${numero} es par`)
    : console.info(`El nuemro ${numero} es impar`)
}


numeroParImpar(21)





/*
 14) Programa una función para convertir grados Celsius
a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/