// antes exsitia el scope global y el funcional.

//Ahora el scope es por bloque con LET

let nombre = "Carlos"

let saludo = `Hola mi nombre es ${nombre}`

let html = `<h1>titulo</h1>`

const arreglo = Array(100).fill("Usuario")

console.log(arreglo)


const hermanos = ["Carlos","Jesus","Julio"]

hermanos.forEach(function (el,i){
    console.log(`<li id="${i}"> ${el}</li>`)
})