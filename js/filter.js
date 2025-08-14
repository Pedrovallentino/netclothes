document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e adiciona ao clicado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                // Exibe se a categoria do produto for a selecionada ou se o filtro for 'todos' [cite: 26, 27]
                if (filter === 'todos' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none'; // Oculta o card [cite: 28]
                }
            });
        });
    });
});