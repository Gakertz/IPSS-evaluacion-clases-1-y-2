document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioInformacion");
    const mensajeFormulario = document.getElementById("mensajeFormulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datosFormulario = new FormData(formulario);
        const datosJSON = {};

        datosFormulario.forEach((valor, clave) => {
            datosJSON[clave] = valor;
        });

        const privacidad = document.getElementById("privacidad");
        datosJSON.privacidad = privacidad.checked;
        const contenidoJSON = JSON.stringify(datosJSON, null, 4);
        const blob = new Blob([contenidoJSON], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const enlaceDescarga = document.createElement("a");

        enlaceDescarga.href = url;
        enlaceDescarga.download = "formulario-ipss.json";
        enlaceDescarga.click();

        URL.revokeObjectURL(url);

        mensajeFormulario.textContent = "Datos descargados correctamente en formato JSON.";
        mensajeFormulario.style.color = "green";
        formulario.reset();
    });
});