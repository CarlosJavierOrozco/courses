import hamburgerMenu from "./dom/menu_amburguesa.js"
import {digitalCLock,alarm} from "./dom/reloj.js"
import {shortcuts, moveBall} from "./dom/eventos_teclados.js"

const d = document

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a")
  digitalCLock("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma")
})


d.addEventListener("keydown",(e)=>{
  shortcuts(e)
  moveBall(e,".ball",".stage")
})