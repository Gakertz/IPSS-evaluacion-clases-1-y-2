document.addEventListener("DOMContentLoaded", () => {

    const formulario =
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

    const mensajeFormulario =
        document.getElementById("mensajeFormulario");
        
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreDiplomado =
            diplomado.options[diplomado.selectedIndex].text;

        mensajeFormulario.textContent =
            `Gracias por solicitar más información sobre el ${nombreDiplomado}. Te contactaremos a la brevedad.`;
    });
    formulario.addEventListener("input", function () {

        if (!contacto.value.startsWith("+56")) {
            mensajeFormulario.textContent =
                "El número debe comenzar con +56.";
            mensajeFormulario.style.color = "red"
        }else if (contacto.value.length !== 12) {
            mensajeFormulario.textContent =
                "El teléfono debe tener 12 caracteres.";
                mensajeFormulario.style.color = "red"
            return;
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
});
