document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const pagination = document.getElementById('pagination');

    let data = {};
    let currentPage = 1;
    const itemsPerPage = 5;

    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            populateCategories();
            renderContent();
        });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        renderContent();
    });
    categoryFilter.addEventListener('change', () => {
        currentPage = 1;
        renderContent();
    });

    function populateCategories() {
        data.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categoryFilter.appendChild(option);
        });
    }

    function renderContent() {
        content.innerHTML = '';
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        let filteredEntries = [];
        data.categories.forEach(category => {
            if (!selectedCategory || selectedCategory === category.name) {
                category.entries.forEach(entry => {
                    if (entry.title.toLowerCase().includes(searchTerm) || entry.description.toLowerCase().includes(searchTerm)) {
                        filteredEntries.push(entry);
                    }
                });
            }
        });

        const totalPages = Math.ceil(filteredEntries.length / itemsPerPage);
        const paginatedEntries = filteredEntries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

        paginatedEntries.forEach(entry => {
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
            content.appendChild(entryDiv);
        });

        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === currentPage) {
                button.disabled = true;
            }
            button.addEventListener('click', () => {
                currentPage = i;
                renderContent();
            });
            pagination.appendChild(button);
        }
    }
});