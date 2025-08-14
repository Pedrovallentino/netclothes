document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    
    function showErrorMessage(element, message) {
        const errorDiv = element.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';
    }

    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(div => div.textContent = '');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrorMessages();

        let isValid = true;
        
        // Validação do Usuário [cite: 51]
        if (usernameInput.value.trim() === '') {
            showErrorMessage(usernameInput, 'O usuário não pode estar vazio.');
            isValid = false;
        } else if (usernameInput.value.length > 15) {
            showErrorMessage(usernameInput, 'O usuário não pode ter mais de 15 caracteres.');
            isValid = false;
        }

        // Validação da Senha [cite: 52]
        const password = passwordInput.value;
        if (password.trim() === '') {
            showErrorMessage(passwordInput, 'A senha não pode estar vazia.');
            isValid = false;
        } else {
            const errors = [];
            if (password.length < 8) { // Mínimo 8 caracteres [cite: 53]
                errors.push('Mínimo de 8 caracteres.');
            }
            if ((password.match(/\d/g) || []).length < 2) { // Mínimo 2 números [cite: 54]
                errors.push('Mínimo de 2 números.');
            }
            if (!/[!@#$%^&*]/.test(password)) { // Mínimo 1 caractere especial [cite: 55]
                errors.push('Mínimo de 1 caractere especial.');
            }
            if (!/[A-Z]/.test(password)) { // Mínimo 1 letra maiúscula [cite: 56]
                errors.push('Mínimo de 1 letra maiúscula.');
            }
            if (!/[a-z]/.test(password)) { // Mínimo 1 letra minúscula [cite: 57]
                errors.push('Mínimo de 1 letra minúscula.');
            }

            if (errors.length > 0) {
                showErrorMessage(passwordInput, errors.join('<br>'));
                isValid = false;
            }
        }

        if (isValid) {
            // Simula um login bem-sucedido [cite: 58]
            alert('Login bem-sucedido!');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', usernameInput.value);
            window.location.href = 'index.html';
        }
    });
});