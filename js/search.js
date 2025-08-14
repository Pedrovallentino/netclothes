document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q'); // Captura o termo da URL 
    const searchResultsContainer = document.querySelector('#results-container');
    const searchTermDisplay = document.querySelector('#search-term-display');

    if (searchTerm) {
        searchTermDisplay.textContent = searchTerm;

        // Simula o carregamento de páginas para busca [cite: 35]
        const pagesToSearch = ['index.html', 'produtos.html', 'contato.html'];
        const results = [];

        pagesToSearch.forEach(page => {
            fetch(page) // Busca assíncrona com fetch() [cite: 35]
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html'); // Análise do DOM [cite: 36]
                    
                    const elements = doc.querySelectorAll('h1, h2, h3, p, a'); // Tags de texto para busca [cite: 37]
                    elements.forEach(el => {
                        if (el.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                            const snippet = el.textContent.substring(0, 100) + '...';
                            results.push({
                                title: doc.title,
                                link: page,
                                snippet: snippet
                            });
                        }
                    });

                    displayResults(results);
                })
                .catch(error => console.error('Erro ao buscar a página:', error));
        });
    }

    function displayResults(results) {
        searchResultsContainer.innerHTML = ''; // Limpa os resultados anteriores
        if (results.length > 0) {
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('search-result');
                resultDiv.innerHTML = `
                    <h3><a href="${result.link}">${result.title}</a></h3>
                    <p>${result.snippet}</p>
                `;
                searchResultsContainer.appendChild(resultDiv);
            });
        } else {
            searchResultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        }
    }
});