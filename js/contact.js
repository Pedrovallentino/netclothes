document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const assuntoInput = document.querySelector('#assunto');
    const mensagemInput = document.querySelector('#mensagem');
    const charCounter = document.querySelector('#char-counter');

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        if (nomeInput.value.trim() === '') { // Nome não pode ser vazio [cite: 63]
            isValid = false;
            // Exibir erro
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) { // E-mail não pode ser vazio e deve ser válido [cite: 64]
            isValid = false;
            // Exibir erro
        }

        if (assuntoInput.value.trim() === '') { // Assunto não pode ser vazio [cite: 65]
            isValid = false;
            // Exibir erro
        }

        if (mensagemInput.value.length < 10) { // Mensagem deve ter no mínimo 10 caracteres [cite: 66]
            isValid = false;
            // Exibir erro
        }

        if (isValid) {
            alert('Mensagem enviada com sucesso!'); // Exibir mensagem de sucesso [cite: 69]
            form.reset();
        }
    });

    mensagemInput.addEventListener('input', () => {
        const currentLength = mensagemInput.value.length;
        charCounter.textContent = `${currentLength} / 500`;

        if (currentLength > 500) {
            charCounter.style.color = 'red'; // Mudar cor se ultrapassar o limite [cite: 68]
        } else {
            charCounter.style.color = 'var(--text-color)';
        }
    });
});