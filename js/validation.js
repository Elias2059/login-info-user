document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    let isValid = validateInput(emailInput, isValidEmail) & validateInput(passwordInput, isValidPassword);

    if (isValid) {
        alert('Login realizado com sucesso!');
    }
});

function validateInput(input, validateFunc) {
    const isValid = validateFunc(input.value);
    if (isValid) {
        hideError(input);
    } else {
        showError(input);
    }
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function showError(input) {
    input.classList.add('error');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'block';
    }
}

function hideError(input) {
    input.classList.remove('error');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Funcionalidade 1: Quando o usuário digita no campo de email, valida o email
document.getElementById('email').addEventListener('input', function() {
    validateInput(this, isValidEmail); // Verifica se o email é válido enquanto o usuário digita
});

// Funcionalidade 2: Quando o usuário digita no campo de senha, valida a senha
document.getElementById('password').addEventListener('input', function() {
    validateInput(this, isValidPassword); // Verifica se a senha é válida enquanto o usuário digita
});
// Ou seja, enquanto o usuário digita, o sistema verifica se o email e a senha estão corretos.
