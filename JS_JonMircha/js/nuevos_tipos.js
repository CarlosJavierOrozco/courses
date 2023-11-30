
/*const set1 = new Set([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])
const set2 = new Set()
set2.add(1)
set2.add(1)
set2.add(2)
set2.add(2)
console.log(set1)
console.log(set2)

console.log("inicio del for of")

for (item of set1){
  console.info(item)
}

console.log("inicio del foreach")

set1.forEach(item => console.log(item))

let arr = Array.from(set1)

console.log(arr[4])

set1.delete(2)

set1.has(5) // => true

set1.clear() // limpia todo el set.*/

/*
let mapa = new Map()
mapa.set('nombre','carlos')
mapa.set('edad',31)
console.log(mapa)
console.log(mapa.get('edad'))
console.log(mapa.has('nombre')) // => true

for (let [key, value] of mapa){
  console.log(`${key}: ${value}`)
}


mapa.delete('nombre')


const personaNormal = {
  "nombre": "carlos orozco",
  "correo": "carlosjorozco.jw@gmail.com"
// edad: 31
}

console.log(personaNormal)

// 1 = nombre, 2 = correo
const personaMapa = new Map()
personaMapa.set(1,"carlos javier")
personaMapa.set(2,"carlosjorozco@yahoo.com.ve")

console.log(personaMapa)

const hermanas = new Map([["mayor","Mariyen"],["mediana","Pelua"],["Pequeña","Maye"]])

console.log(hermanas)


const hermanasNombres = [...hermanas.values()]

console.log(hermanasNombres)*/


/*const ws = new WeakSet()

let valor1 = {"valor": 1}
let valor2 = {"valor": 2}
let valor3 = {"valor": 3}
let valor4 = {"valor": 4}
let valor5 = {"valor": 5}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)
ws.add(valor4)
ws.add(valor5)


const wm = new WeakMap()
let llave1 = {}
let llave2 = {}
let llave3 = {}
let llave4 = {}

wm.set(llave1,1)
wm.set(llave2,2)
wm.set(llave3,3)
wm.set(llave4,5)*/

//iterable e iterador
//const iterable = [1,2,3,4,5,6,7,8,9];
//const iterador = iterable[Symbol.iterator]()

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

/*let next = iterador.next()

while(!next.done){
  console.log(next.value)
  next = iterador.next()
}
*/


function* iterable(){
  yield "hola1"
  console.log("hola consola")
  yield "hola2"
  yield "hola3"
  console.log("seguimos con mas instrucciones")
  yield "hola4"
  yield "hola5"
} 

let iterador = iterable()

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

/*for (y of iterador){
  console.log(y)
}

const arr = [...iterable()]
console.log(arr)*/

// proxies
/*
const persona = {
  nombre: "",
  edad: 0,
  correo: ""
}

const manejador = {
  set(obj,prop,valor){
    if(Object.keys(obj).indexOf(prop) === -1){
      return console.error("no exite esa propiedad")
    }
    //validar nombre correcto, apellido y correo. Lo tengo como tarea
    //ten en cuenta que debes valirda la propiedad y el valor 
    // si propiedad es igual a tal y el valor a tal entoncees retornar bien. 
    //clase para repasar los proxies
    obj[prop] = valor
  }
}

const carlos = new Proxy(persona,manejador)

carlos.nombre = "Carlos"
carlos.edad = 31
carlos.correo = "carlos@gmail.com"
//carlos.casado = true*/


//propiedades dinamicas

/*let aleatorio = Math.round(Math.random() * 20)
const objUsuarios = {
  [`id_${aleatorio}`]: "aleatorio"
}
const usuarios = ["carlos","kala","jon"]


usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios)*/



//call,apply y bind

//llamar un nuevo contexto call() y apply()
//diferencia entre call() y apply()
//=> como pasamos los parametros a utilizar. Con call separados por comas y con apply en un arreglo



this.nombre = "window"

function saludar(bien,mal){
  console.log(this.nombre + bien + mal)
}

let carlos = {
  "nombre": "carlos"
}
saludar.apply(carlos,[" bem", " mal"])

//THIS 

// this dentro de una funcion hace referencia al objeto window
// this dentro de un objeto hace referencia al objeto mismo.
// this dentro de una clase o funcion constructora hace referencia al objeto instanciado.
// this dentro de una arrow function toma el contexto del padre del objeto donde se ha 
// creado la arrow function. Si no hay padre, entonces "this" es el objeto windows... que 
// es el padre de todo. 

window.nombre = "WINDOWS 10"
console.log(this === window) // => true

function Persona(nombre){
  this.nombre = nombre
  return () => {
    console.log("hola " + this.nombre)
  }
}

function Persona(nombre){
  this.nombre = nombre
  return function () {
    console.log("hola " + this.nombre)
  }
}


let yo = new Persona("carlos")