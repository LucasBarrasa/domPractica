import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollTopButton from "./boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    
    hamburgerMenu(".panel-btn", ".panel",".menu a");
    
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    
    alarm("/assets/alarma-morning-mix.mp3","#activar-alarma","#desactivar-alarma"); 

    scrollTopButton(".scroll-tu-up")





});
