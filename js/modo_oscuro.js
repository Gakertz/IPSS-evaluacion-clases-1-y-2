const CLAVE_MODO_OSCURO = "modoOscuroActivo";

function aplicarModoOscuro(activo) {
    const boton = document.getElementById("btnModoOscuro");
    document.body.classList.toggle("modo-oscuro", activo);
    if (boton) {
        boton.textContent = activo
            ? "Desactivar modo oscuro"
            : "Activar modo oscuro";
    }
}

export function iniciarModoOscuro() {
    const boton = document.getElementById("btnModoOscuro");
    if (!boton) {
        return;
    }
    const modoGuardado = localStorage.getItem(CLAVE_MODO_OSCURO) === "true";
    aplicarModoOscuro(modoGuardado);
    boton.addEventListener("click", () => {
        const nuevoEstado = !document.body.classList.contains("modo-oscuro");
        localStorage.setItem(CLAVE_MODO_OSCURO, String(nuevoEstado));
        aplicarModoOscuro(nuevoEstado);
    });
}