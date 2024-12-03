'use strict';
document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const query = document.getElementById('query').value.trim();
    if (!query) {
        alert('Please ');
        return;
    }

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    data.forEach(item => {
        const show = item.show;

        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = show.name || 'Untitled';
        article.appendChild(title);

        if (show.url) {
            const link = document.createElement('a');
            link.href = show.url;
            link.target = '_blank';
            link.textContent = 'More details';
            article.appendChild(link);
        }

        const img = document.createElement('img');
        if (show.image && show.image.medium) {
            img.src = show.image.medium;
        } else {
            img.src = 'https://via.placeholder.com/210x295?text=Not%20Found';
        }
        img.alt = show.name || 'Image not available';
        article.appendChild(img);

        if (show.summary) {
            const summary = document.createElement('div');
            summary.innerHTML = show.summary;
            article.appendChild(summary);
        }

        resultsContainer.appendChild(article);
    });
});
