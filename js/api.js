document.addEventListener("DOMContentLoaded", () => {
    
    const botonInfo = document.querySelectorAll(".boton-pokemon");
            const contenedor = document.getElementById('contenedor-resultado');
            const coloresPastel = [
                '#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', 
                '#e8eaf6', '#e3f2fd', '#e1f5fe', '#e0f7fa', 
                '#e0f2f1', '#e8f5e9', '#f1f8e9', '#f9fbe7', 
                '#fffde7', '#fff8e1', '#fff3e0', '#fbe9e7'
            ];

    botonInfo.forEach((boton) => {
    
        boton.addEventListener("click", async function(event) {
            const divId = boton.closest('div').id;
            console.log("El div es : ",divId);
            obtenerPokemon(divId);

    });
    });

    async function obtenerPokemon(divId) {
        const idAleatorio = Math.floor(Math.random() * 1025) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

        try {
                    const respuesta = await fetch(url);

                    if (!respuesta.ok) {
                        throw new Error(`Pokémon no encontrado. Código de error: ${respuesta.status}`);
                    }
            
                    const datos = await respuesta.json();
                    
                    const respuestaa = await fetch('data/datos.json');

                    if (!respuestaa.ok) {
                        throw new Error(`No se pudo obtener el archivo JSON (Estado: ${respuestaa.status})`);
                    }

                    const diplomados = await respuestaa.json();

                    const resultado = diplomados.find(d => d.id === divId);

                    if (resultado) {
                        console.log(`Diplomado: ${resultado.diplomado}`);
                        console.log(`Información: ${resultado.informacion}`);
                    } else {
                        console.warn(`No existe ningún diplomado con el ID "${divId}".`);
                    }

                    const nombre = datos.name;
                    const imagen = datos.sprites.front_default;
                    const tipos = datos.types.map(tipoInfo => tipoInfo.type.name).join(', ');
            
                    console.log(`Nombre: ${nombre}`);
                    console.log(`Tipos: ${tipos}`);
                    console.log(`Imagen: ${imagen}`);
                    
                    const colorAleatorio = coloresPastel[Math.floor(Math.random() * coloresPastel.length)];
            
                    contenedor.innerHTML = `
                        <div class="pokemon-card" style="background-color: ${colorAleatorio};">
                            <span class="pokemon-id">N° ${datos.id}</span>
                            <h2 class="pokemon-name">${datos.name}</h2>
                            <img src="${datos.sprites.front_default}" alt="${datos.name}">
                            <div class="pokemon-info">
                                 <p><h2>${resultado.diplomado}</h2></p>
                            </div>
                            <div class="pokemon-info" style="margin-top: 10px;">
                                <p class="texto-pequeno">${resultado.informacion}</p>
                            </div>
                        
                    `;

                    
        } catch (error) {
            console.error("Hubo un problema con la petición:", error.message);
        }
    }


});