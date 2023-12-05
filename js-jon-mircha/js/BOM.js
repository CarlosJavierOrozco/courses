//BOM propiedades y eventos

window.addEventListener('resize',e=>{
  console.clear()
  console.log("##### Evento Resize #####")
  console.log(innerWidth)
  console.log(innerHeight)
  console.log(outerWidth)
  console.log(outerHeight)
 //scrolls 

})



window.addEventListener('scroll',()=>{
  console.clear()
  console.log("##### Evento Scroll #####")
  console.log(scrollX)
  console.log(scrollY)
  console.log(pageXOffset)
  console.log(pageYOffset)
})


window.addEventListener('load',e=>{
  console.log("##### Evento Load #####")  
  console.log(screenX)
  console.log(screenY)
})


//Es mucho mas eficiente. No espera CSS por ejemplo. Imagenes, scripts etc.
document.addEventListener('DOMContentLoaded',e=>{
  console.log("##### Evento DOMContentLoaded #####")  
  console.log(screenX)
  console.log(screenY)
})


const $btnAbrir = document.getElementById("abrir-ventana")
const $btnCerrar = document.getElementById("cerrar-ventana")
const $btnImprimir = document.getElementById("imprimir-ventana")

let ventana


$btnAbrir.addEventListener('click',(e)=>{
  ventana = window.open("https://aprendejavascript.org/")
})

$btnCerrar.addEventListener('click',(e)=>{
  //window.close()
  ventana.close()
})

$btnImprimir.addEventListener('click',(e)=>{
  window.print()
})

//objeto URL (location)

console.log("####### LOCATION #######")
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.search)
console.log(location.pathname)

// HISTORY

console.log(history.length)
// history.forward()
// history.back()
// history.go()

//NAVIGATOR

console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker) // progresive web apps
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)

