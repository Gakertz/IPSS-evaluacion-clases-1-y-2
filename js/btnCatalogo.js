export function btnCatalogo(){

    const botonesDescargar = document.querySelectorAll(".btnDescargar");

    botonesDescargar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            alert("¡Iniciando la descarga de la malla!");
        });
    });

    const botonesInfo = document.querySelectorAll(".btnInfo");

    botonesInfo.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Cargando más información...");
        });
    });
}