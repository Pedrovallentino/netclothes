document.addEventListener('DOMContentLoaded', () => {
    // Gerenciamento do estado de login
    const loginLink = document.querySelector('#login-link a');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    if (isLoggedIn === 'true') {
        loginLink.textContent = `Olá, ${username}`; // Substitui o link por info do usuário [cite: 43]
        loginLink.href = '#'; // Pode ser um link para o perfil
        
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Sair';
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.reload();
        });

        loginLink.parentNode.appendChild(logoutLink);
    }
});