document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.categories.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('category');

                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = category.name;
                categoryDiv.appendChild(categoryTitle);

                category.entries.forEach(entry => {
                    const entryDiv = document.createElement('div');
                    entryDiv.classList.add('entry');

                    const entryTitle = document.createElement('h3');
                    entryTitle.textContent = entry.title;
                    entryDiv.appendChild(entryTitle);

                    const entryDescription = document.createElement('p');
                    entryDescription.textContent = entry.description;
                    entryDiv.appendChild(entryDescription);

                    if (entry.youtubeId) {
                        const iframe = document.createElement('iframe');
                        iframe.src = `https://www.youtube.com/embed/${entry.youtubeId}`;
                        iframe.frameBorder = '0';
                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                        iframe.allowFullscreen = true;
                        entryDiv.appendChild(iframe);
                    }

                    categoryDiv.appendChild(entryDiv);
                });

                content.appendChild(categoryDiv);
            });
        });
});
