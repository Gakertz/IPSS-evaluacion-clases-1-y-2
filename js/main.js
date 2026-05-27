import { iniciarModoOscuro } from './modo_oscuro.js';
import { iniciarValidacion } from './validacion.js';
import { btnCatalogo } from "./btnCatalogo.js"
import './submit.js';

document.addEventListener("DOMContentLoaded", () => {
    iniciarModoOscuro();
    iniciarValidacion();
    btnCatalogo();
});
