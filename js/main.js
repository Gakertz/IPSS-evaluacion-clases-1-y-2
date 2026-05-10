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
});
