import hamburgerMenu from "./dom/menu_amburguesa.js";
import {digitalCLock,alarm} from "./dom/reloj.js";
import {shortcuts, moveBall} from "./dom/eventos_teclados.js";
import countdown from "./dom/cuenta_regresiva.js";
import darkTheme from "./dom/tema_oscuro.js";
import scrollTopButton from "./dom/boton_scroll.js";

const d = document

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitalCLock("#reloj","#activar-reloj","#desactivar-reloj");
  alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
  countdown("countdown","Nov 26, 2022 07:37:50","Se termino el tiempo, espero ya seas desarrollador web :)");
  scrollTopButton(".scroll-top-btn");

})


d.addEventListener("keydown",(e)=>{
  shortcuts(e)
  moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme","dark-mode");