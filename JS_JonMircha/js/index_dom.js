import hamburgerMenu from "./dom/menu_amburguesa.js";
import {digitalCLock,alarm} from "./dom/reloj.js";
import {shortcuts, moveBall} from "./dom/eventos_teclados.js";
import countdown from "./dom/cuenta_regresiva.js";

const d = document

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitalCLock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
  countdown("countdown","Apr 26, 2023 12:00:00","Se termino el tiempo, espero ya seas desarrollador web :)");
})


d.addEventListener("keydown",(e)=>{
  shortcuts(e)
  moveBall(e,".ball",".stage")
})