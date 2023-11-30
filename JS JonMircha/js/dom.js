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