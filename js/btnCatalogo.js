import { obtenerPokemon } from './api.js';
export function btnCatalogo(){
    const botonesDescargar = document.querySelectorAll(".btnDescargar");
    const botonInfo = document.querySelectorAll(".boton-pokemon");
    const contenedor = document.getElementById('contenedor-resultado');
    const coloresPastel = [
        '#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', 
        '#e8eaf6', '#e3f2fd', '#e1f5fe', '#e0f7fa', 
        '#e0f2f1', '#e8f5e9', '#f1f8e9', '#f9fbe7', 
        '#fffde7', '#fff8e1', '#fff3e0', '#fbe9e7'
    ];

    botonesDescargar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            alert("¡Iniciando la descarga de la malla!");
        });
    });

    const botonesInfo = document.querySelectorAll(".btnInfo");

    botonInfo.forEach((boton) => {
        boton.addEventListener("click", async function(event) {
            const divId = boton.closest('div').id;
            console.log("El div es : ", divId);
            
            const respuestaApi = await obtenerPokemon(divId);
            
            if (!respuestaApi) return;

            const { datos, resultado } = respuestaApi;
            
            if (!resultado) {
                console.warn(`No existe ningún diplomado con el ID "${divId}".`);
                return;
            }

            const colorAleatorio = coloresPastel[Math.floor(Math.random() * coloresPastel.length)];
    
            contenedor.innerHTML = `
                <div class="pokemon-card" style="background-color: ${colorAleatorio};">
                    <span class="pokemon-id">N° ${datos.id}</span>
                    <h2 class="pokemon-name">${datos.name}</h2>
                    <img src="${datos.sprites.front_default}" alt="${datos.name}">
                    <div class="pokemon-info">
                        <h2>${resultado.diplomado}</h2>
                    </div>
                    <div class="pokemon-info" style="margin-top: 10px;">
                        <p class="texto-pequeno">${resultado.informacion}</p>
                    </div>
                </div>
            `;
        });
    });
}