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
//$card.classList.add("rotate-45")

console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))

/*$card.classList.remove("rotate-45")
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")*/

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

console.clear()

// 67. DOM Traversing: Recorriendo el DOM

// DOM Traversing: está enfocado a los Elementos, es decir a las etiquetas HTML

//const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children); // los hijos de "cards" "elementos"
// console.log($cards.children[2]); // hijo 3
// console.log($cards.parentElement); // retorna el elemento "body"
// console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
// console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
// console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
// console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
// console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
// console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3

console.clear()

// 68. DOM: Creando Elementos y Fragmentos

// Crear elementos (etiquetas HTML) dinámica a través de JS



const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"), 
  $figcaptionText = document.createTextNode("People"), // nodo de texto dentro del nodo "figcaption"
  $cards = document.querySelector(".cards");

const $figure2 = document.createElement("figure");


$img.setAttribute("src", "https://placeimg.com/200/200/people");
$img.setAttribute("alt", "People");
$figure.classList.add("card");


// agregarlas al árbol
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure); // <figure></figure>


// otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/animal" alt="Animal">
    <figcaption>Animal</figcaption>
    `



$figure2.classList.add("card");
$cards.appendChild($figure2);



// otra forma
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");


// no es una buena practica "write"
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});



// otra forma
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


// otra forma (ESTA ES LA MEJOR FORMA)
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

// Curso JavaScript: 69. DOM: Templates HTML

//para cuando quiera pintar en el DOM información dimaca debo hacer lo siguiente:
//1.Crear el template en Html
//2.Crear el Template en js
//3.Crear el fragme en js
//4.Ejecutar la función y/o el proceso y llevar al template y luego al fragme para después pintarlo en el HTML.

//const $cardsTemp = document.querySelector(".cards") // ya estaba creado
const $template = document.getElementById("template-card").content
const $fragmentTemp = document.createDocumentFragment()
const   cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardsContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragmentTemp.appendChild($clone);
});

$cards.appendChild($fragmentTemp);

/*
//Curso JavaScript: 70. DOM: Modificando Elementos (Old Style)

//const $cards = document.querySelector(".cards") 
const $newCard = document.createElement("figure")
const $cloneCards = $cards.cloneNode(true)
$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="ANY">
    <figcaption>ANY</figcaption>
`

$newCard.classList.add("card")

//$cards.replaceChild($newCard,$cards.children[2])
//$cards.insertBefore($newCard,$cards.firstElementChild)
//$cards.removeChild($cards.lastElementChild)
document.body.appendChild($cloneCards)
/*


Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style)

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); */
//$cards.prepend($newCard); //
//$cards.append($newCard); //
//$cards.before($newCard);
//$cards.after($newCard);