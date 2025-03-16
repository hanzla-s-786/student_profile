function togglePasswordVisibility(inputId, eyeIcon) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

function checkPasswordStrength() {
const passwordInput = document.getElementById('password');
let password = passwordInput.value;

// Restrict input to max 12 characters
if (password.length > 12) {
password = password.substring(0, 12);
passwordInput.value = password; // Enforce limit
}

const strengthBar = document.getElementById('strength-bar');
let width = 0;
let strengthClass = '';

if (password.length > 0 && password.length <= 4) {
strengthClass = 'strength-weak';
width = 25;
} else if (password.length > 4 && password.length <= 8) {
strengthClass = 'strength-medium';
width = 50;
} else if (password.length > 8) {
strengthClass = 'strength-strong';
width = 100;
}

strengthBar.className = strengthClass;
strengthBar.style.width = `${width}%`;
}
