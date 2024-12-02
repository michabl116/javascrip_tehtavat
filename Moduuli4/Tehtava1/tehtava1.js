'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        const query = document.getElementById('query').value;
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error al buscar la serie: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Resultados de la búsqueda:', data);

            // Opcional: Mostrar los resultados en la página
        } catch (error) {
            console.error('Hubo un problema con la búsqueda:', error);
        }
    });
});

