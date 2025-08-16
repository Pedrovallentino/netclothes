// login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const feedback = document.querySelector("#login-feedback");
    const usernameError = document.querySelector("#username-error");
    const passwordError = document.querySelector("#password-error");

    // Função para exibir mensagens de erro ou sucesso
    function showMessage(message, type = "error") {
        feedback.textContent = message;
        feedback.className = type === "success" ? "success-message" : "error-message";
    }

    function clearErrors() {
        usernameError.textContent = "";
        passwordError.textContent = "";
        feedback.textContent = "";
    }

    // Validação do usuário
    function validateUsername(username) {
        if (!username.trim()) {
            return "O nome de usuário não pode estar vazio.";
        }
        if (username.length > 15) {
            return "O nome de usuário deve ter no máximo 15 caracteres.";
        }
        return "";
    }

    // Validação da senha
    function validatePassword(password) {
        if (!password) {
            return "A senha não pode estar vazia.";
        }
        if (password.length < 8) {
            return "A senha deve ter pelo menos 8 caracteres.";
        }
        if ((password.match(/\d/g) || []).length < 2) {
            return "A senha deve conter pelo menos 2 números.";
        }
        if (!/[!@#$%^&*]/.test(password)) {
            return "A senha deve conter pelo menos 1 caractere especial (!@#$%^&*).";
        }
        if (!/[A-Z]/.test(password)) {
            return "A senha deve conter pelo menos 1 letra maiúscula.";
        }
        if (!/[a-z]/.test(password)) {
            return "A senha deve conter pelo menos 1 letra minúscula.";
        }
        return "";
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        let valid = true;

        const userError = validateUsername(username);
        if (userError) {
            usernameError.textContent = userError;
            valid = false;
        }

        const passError = validatePassword(password);
        if (passError) {
            passwordError.textContent = passError;
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Se chegou aqui, é porque passou nas validações
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        showMessage("Login realizado com sucesso!", "success");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
});
