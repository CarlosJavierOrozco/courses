let prop = "size"

const pokemon = {
  nombre: "",
  tipo: "",
  atacar: function(){
    console.log("pow pow")
  },
  [prop]: true
}


pokemon.atacar()
console.log(pokemon.small)

// pikachu tiene el metodo atacar de los pokemon
const pikachu = {
  atacar: pokemon.atacar.bind(pokemon)
}


pikachu.atacar()

//meter una propiedad dinamica


//Crear una lista añadiendoles los elementos "li" con textContent, innerHTML y fragment. 

let usuarios = ["carlos","nami","boa","luffy","zoro"]
let $ul = document.createElement("ul")


usuarios.forEach((el)=>{
  let $li = document.createElement("li")
  $li.textContent = el
  $ul.appendChild($li)

})

document.body.appendChild($ul)

const hermanas = ["Mary","Pelua","Maye"]
let $ul2 = document.createElement("ul")

hermanas.forEach((el)=>{
  $ul2.innerHTML += `<li>${el}</li>`
})

document.body.appendChild($ul2)


// usar fragment

const meses = ["enero","febrero","marzo"]
let $ul3 = document.createElement("ul")
let $fragment = document.createDocumentFragment()

meses.forEach((el)=>{
  let $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})


$ul3.appendChild($fragment)

document.body.appendChild($ul3)


let $ulList = document.getElementById("ul")
//let $el = document.createElement("li") 
let $el = "<li>li insertada como HTML</li>"
//$el.style.color = "red"
//$el.textContent = "elemento insertado"


$ulList.insertAdjacentHTML("beforeend",$el)


let cloneUlList = $ulList.cloneNode(true)


document.body.appendChild(cloneUlList)

//delegacion de eventos. 

document.addEventListener('click',(e)=>{

  if(e.target.matches("p")){
    alert("hiciste click en un parrafo")
    e.stopPropagation() //no se detiene la propagacion??? 
  }

  alert("hiciste click en culquier otro lado")

})

//ejemplo basico propiedad dinamica. 

let users = ["carlos","tutis","holisofi"]
let objUsers = {}

users.forEach((u,i)=>{
  objUsers[`ID_${i}`] = u
})

console.log(objUsers)