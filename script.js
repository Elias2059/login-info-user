document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    let isValid = true;

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        showError(emailInput, 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else {
        hideError(emailInput);
    }

    if (!passwordInput.value || passwordInput.value.length < 6) {
        showError(passwordInput, 'A senha deve ter no mínimo 6 caracteres.');
        isValid = false;
    } else {
        hideError(passwordInput);
    }

    if (isValid) {
        alert('Login realizado com sucesso!');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        input.style.borderColor = '#e74c3c';
    }
}

function hideError(input) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
        input.style.borderColor = '#ccc';
    }
}
