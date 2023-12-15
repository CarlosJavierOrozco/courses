//Funcion constructora

/*function Perro(n,r,t){
  this.super = Animal
  this.super(n,r)
  this.tamanio = t
}

Perro.prototype = new Animal
Perro.prototype.constructor = Perro
*/

//cortocircuito and
console.log(false && "derecha")

//variables. 

const $bgColor = window.getComputedStyle(document.documentElement).getPropertyValue("--bg-color")
const $fontSize = window.getComputedStyle(document.documentElement).getPropertyValue("--font-size")

console.log($bgColor)
console.log($fontSize)

//setear valores 
document.body.style.backgroundColor = $bgColor

//accder a una clase css

let $primerParrafo = document.getElementById("primerParrafo")


console.log($primerParrafo.classList)
console.log($primerParrafo.classList.contains("miClase") + " si tiene la clase")
console.log($primerParrafo.getAttribute("class"))
console.log($primerParrafo.className) // al parecer estas dos ultimas hacen lo mismo con las clases


$primerParrafo.classList.replace("miClase","claseReemplazada")

console.log($primerParrafo.className) 


//textos

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

$primerParrafo.innerHTML = text
$primerParrafo.outerHTML = text // para este caso es mejor
//$primerParrafo.innerText = text
//$primerParrafo.textContent = text