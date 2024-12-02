'use strict';
document.addEventListener('DOMContentLoaded', () => {
            const form = document.querySelector('form');

            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const query = document.getElementById('query').value;
                const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log('Search results:', data);


            });
        });