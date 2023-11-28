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


// manejo de errores

try {
  
  let numero = "ff"

  if (isNaN(numero)) {
    throw new Error("No es un numero papa")
  }

  console.log(numero + 100)

} catch(error) {
  console.log(`Se produjo el siguiente error ${error}`);
}


// programacion orientada a objetos

const animal = {
  nombre : "Rocko",
  sonar(){
    console.log('hago sonido porque estoy vivo')
  }
}


const animal2 = {
  nombre : "Pata Blanca",
  sonar(){
    console.log('hago sonido porque estoy vivo!')
  }
}

// para crear mas objeto se hacia con una funcion contructora.

function Animal(nombre,genero){
  this.nombre = nombre
  this.genero = genero

  // los metodos es mejor meterlos al prototipo.
  this.sonar = function(){
    console.log('Hago sonido porque estoy vivo')
  }
}

// esta era la mejor practica
Animal.prototype.saludar = function() {
  console.log(`Hola me llamo ${this.nombre} y soy ${this.genero}`)
};

const snoopy = new Animal('Snoopy','Macho')

// HERENCIA PROTOTIPICA
// la funcion constructora Perro heredara de Animal

function Perro(nombre,genero,tamanio){
  this.super = Animal
  this.super(nombre,genero)
  this.tamanio = tamanio
}

// Perro herada todo de la funcion constructora Animal()


Perro.prototype = new Animal()
Perro.prototype.constructor = Perro


const koki = new Perro('Koki','Macho','Pequeño')
