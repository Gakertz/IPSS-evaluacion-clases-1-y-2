import { iniciarModoOscuro } from './modo_oscuro.js';

document.addEventListener("DOMContentLoaded", () => {
    iniciarModoOscuro();

    const form =
        document.getElementById("formularioInformacion");

    const rut =
        document.getElementById("rut");

    const diplomado =
        document.getElementById("diplomado");

    const pais =
        document.getElementById("pais");

    const contacto =
        document.getElementById("contacto");

    const mensajeRut =
        document.getElementById("mensajeRut");

    const mensajeContacto =
        document.getElementById("mensajeContacto");

    const mensajeFormulario =
        document.getElementById("mensajeFormulario");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreDiplomado =
            diplomado.options[diplomado.selectedIndex].text;

        mensajeFormulario.textContent =
            `Gracias por solicitar más información sobre el ${nombreDiplomado}. Te contactaremos a la brevedad.`;
    });

    form.addEventListener("input", function () {

        if (!contacto.value.startsWith("+56")) {
            mensajeContacto.textContent =
                "El número debe comenzar con +56.";
            mensajeContacto.style.color = "red";
        } else if (contacto.value.length !== 12) {
            mensajeContacto.textContent =
                "El teléfono debe tener 12 caracteres.";
            mensajeContacto.style.color = "red";
        } else {
            mensajeContacto.textContent = "Formato de telefono correcto.";
            mensajeContacto.style.color = "green";
        }

    });

    rut.addEventListener("input", function () {
        const valorRut = rut.value;
        const posicionGuion = valorRut.indexOf("-");
        const ultimaPosicion = valorRut.length - 2;
        const tieneGuionAntesDelUltimoDigito = posicionGuion === ultimaPosicion;
        const rutSinGuion = valorRut.replace("-", "");

        if (valorRut.length === 0) {
            mensajeRut.textContent = "";
            mensajeRut.style.color = "";
        } else if (!valorRut.includes("-")) {
            mensajeRut.textContent = "El RUT debe incluir guion. Ejemplo: 12345678-9";
            mensajeRut.style.color = "red";
        } else if (!tieneGuionAntesDelUltimoDigito) {
            mensajeRut.textContent = "El guion debe estar antes del último dígito. Ejemplo: 12345678-9";
            mensajeRut.style.color = "red";
        } else if (rutSinGuion.length > 9) {
            mensajeRut.textContent = "El RUT no debe tener más de 9 caracteres sin contar el guion.";
            mensajeRut.style.color = "red";
        } else if (rutSinGuion.length < 8) {
            mensajeRut.textContent = "El RUT no debe tener menos de 8 caracteres sin contar el guion.";
            mensajeRut.style.color = "red";
        } else {
            mensajeRut.textContent = "Formato de RUT correcto.";
            mensajeRut.style.color = "green";
        }
    });

    const botonesDescargar = document.querySelectorAll(".btnDescargar");

    botonesDescargar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            alert("¡Iniciando la descarga de la malla!");
        });
    });


});