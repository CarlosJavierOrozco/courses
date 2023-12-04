import hamburgerMenu from "./dom/menu_amburguesa.js"
import {digitalCLock,alarm} from "./dom/reloj.js"

const d = document

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a")
  digitalCLock("#reloj","#activar-reloj","#desactivar-reloj")
})

