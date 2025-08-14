document.addEventListener('DOMContentLoaded', () => {
    // Botão "Voltar ao Topo"
    const backToTopBtn = document.querySelector('#back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Aparece após rolar 300px [cite: 76]
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animação suave [cite: 77]
        });
    });

    // Alternador de Tema (Claro/Escuro)
    const themeToggleBtn = document.querySelector('#theme-toggle');

    // Verifica a preferência do usuário ao carregar a página [cite: 94]
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggleBtn.textContent = savedTheme === 'dark-theme' ? '🌙' : '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme'); // Alterna a classe [cite: 92]

        // Salva a preferência no localStorage [cite: 93]
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
            themeToggleBtn.textContent = '🌙';
        } else {
            localStorage.setItem('theme', '');
            themeToggleBtn.textContent = '☀️';
        }
    });
});