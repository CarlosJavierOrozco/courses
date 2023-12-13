//propiedades dinamicas
const usuarios = ["carlos","jesus","julio"]

const objUsuarios = {}

usuarios.forEach((usuario,i) => objUsuarios[`id_${i}`] = usuario)

console.log(objUsuarios.id_2)

//funciones generadoras

function* iterable(){
  yield "soy el primer yield"
  console.log("sigo con una tarea")
  yield "segundo yield, aqui para el conteo"
  console.log("esto esta fuera del conteo")
  yield "tecer yield"
}

const arregloGenerador = [...iterable()];

console.log(arregloGenerador);

// funcion AE jquery

(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log")
})(document, window, console);


//iteradores

const iterador = usuarios[Symbol.iterator]()

console.log(iterador.next())

//set 

let set = new Set();

set.add('Jonathan');
set.add('Irma');
set.add('Irma');
//Imprime ["Jonathan", "Jonathan"]
//Imprime ["Irma", "Irma"]

for ([i,u] of set.entries()) {
  console.log(i,u)
}

for (item of set.entries()){
  console.log(item)
}

//comodines console

let string = "STRINGOTE"
console.log("hola este es un string %s: wow que string", string)
//=> hola este es un string STRINGOTE: wow que string

//sets

let seteo = new Set(["hola",22,"casa"])

console.log(seteo)


//push y unshif

const hermanas = []

hermanas.push("Pelua") // segunda
hermanas.push("Maye") //tercera
hermanas.unshift("Mariyen") //primera

console.log(hermanas)

//agrego elemento hijo al final

let elementoHijo = document.createElement("p")
let div = document.getElementById("div")
elementoHijo.textContent = "Soy el texto del ultimo hijo del div"


div.appendChild(elementoHijo)

// seguimos con interadores 

const iterables = [1,2,3,4,5,6,7,8,9];
const iterator = iterables[Symbol.iterator]()

//Recorrer con un siclo while el arreglo con el iterador

let next = iterator.next()

while(!next.done){
  console.log(next.value)
  next = iterator.next()
}

//mapas


const hermanasMap = new Map([["mayor","Mariyen"],["mediana","Pelua"],["Pequeña","Maye"]])

const nombresHer = [...hermanasMap.values()]

console.log(nombresHer)


// los proxys 

const obj = {
  "nombre": "",
  "edad": ""
}


const manejador = {
  set(obj,prop,value){
    if(Object.keys(obj).indexOf(prop) === -1){
      return console.error("no exite esa propiedad")
    }
    obj[prop] = value
  }
}

const objProxy = new Proxy(obj,manejador)

objProxy.edad = 31
objProxy.casado = true

console.log(objProxy.edad)