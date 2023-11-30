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
console.log(menu)