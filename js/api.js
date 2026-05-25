document.addEventListener("DOMContentLoaded", () => {

    const botonesInfo = document.querySelectorAll(".btnInfo");
    botonesInfo.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Cargando más información...");
        });
    });
});