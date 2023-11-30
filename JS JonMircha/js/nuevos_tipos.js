
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
const iterable = [1,2,3,4,5,6,7,8,9];
const iterador = iterable[Symbol.iterator]()

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

let next = iterador.next()

while(!next.done){
  console.log(next.value)
  next = iterador.next()
}
