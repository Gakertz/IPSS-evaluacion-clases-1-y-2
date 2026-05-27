export async function obtenerPokemon(divId) {


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
                return { datos, resultado };

                
    } catch (error) {
        // Capturamos cualquier error de red o de validación
        console.error("Hubo un problema con la petición:", error.message);
        return null; // Retorna null si algo falla
    }
}