/*console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.scripts)
console.log(document.styleSheets)
setTimeout(()=>{
console.log(document.getSelection().toString())
},2000)

document.write("<h1>hola</h1>")*/

/*
let li = document.getElementsByTagName("li") // => HTMLcolecction
let li2 = document.querySelector("li") // => HTMLElement
let li3 = document.querySelectorAll("li") //=> nodelist
let cards = document.getElementsByClassName("cards")
let cards2 = document.querySelector(".cards")
let cards3 = document.querySelectorAll(".cards")
let name = document.getElementsByName("nombre")
let menu = document.getElementById("menu")

console.log(li)
console.log(li2)
console.log(li3)
console.log(cards)
console.log(cards2)
console.log(cards3)
console.log(name) 
console.log(menu)*/

//obtener los atributos
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))


console.log(document.querySelector(".link").href) // => http://localhost:8848/basico.html
console.log(document.querySelector(".link").getAttribute("href")) // => basico.html

document.documentElement.lang = "es-VE"
document.documentElement.setAttribute("lang","es-MX")

console.log(document.documentElement.lang)


const $linkBasico = document.querySelector(".link")

$linkBasico.setAttribute("target","_blanck")
$linkBasico.setAttribute("rel","noopener")
console.log($linkBasico.hasAttribute("rel"))
console.log($linkBasico)
$linkBasico.removeAttribute("rel")
console.log($linkBasico.hasAttribute("rel"))


//data attributes

//obtener valores de los data attributes
console.log($linkBasico.getAttribute("data-description"))
console.log($linkBasico.dataset.description)
//setear valores a los data attributes
$linkBasico.setAttribute("data-id","link1")
console.log($linkBasico.dataset.id)
$linkBasico.dataset.type = "internal link"
console.log($linkBasico.dataset.type)

console.log($linkBasico.style.backgroundColor)
console.log($linkBasico.getAttribute("style"))
//console.log(window.getComputedStyle($linkBasico))
console.log(window.getComputedStyle($linkBasico).getPropertyValue("font-size"))
//setear estilos
$linkBasico.style.setProperty("text-decoration","none")
$linkBasico.style.setProperty("display","block")
$linkBasico.style.width = "50%"
$linkBasico.style.textAlign = "center"
$linkBasico.style.margin = "1em auto"
$linkBasico.style.setProperty("padding","1em")
$linkBasico.style.setProperty("border-radius","10px")


//variables CSS

const $html = document.documentElement
const $body = document.body

let darkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(darkColor,yellowColor)

//$body.style.backgroundColor = darkColor
//$body.style.color = yellowColor

const $card = document.querySelector(".card")

// podemos separar las clases por coma para añadir o quitar mas...
$card.classList.add("rotate-45")

console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))

$card.classList.remove("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")

// textos 

const $whatIsDOM = document.getElementById("que-es")

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

$whatIsDOM.textContent = text
$whatIsDOM.innerHTML = text
$whatIsDOM.outerHTML = text //reemplazar