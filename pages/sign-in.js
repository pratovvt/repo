
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Скрываем прелоадер
});
function showToast(message, duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, duration);
}
// Функция для отправки данных авторизации через AJAX
function authenticateUser(email, password) {
    const authData = {
        email: email,
        password: password
    };
    fetch('http://10.30.56.50:16713/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Если авторизация успешна, перезагрузите страницу или перенаправьте на другую страницу
                window.location.href = 'dashboard.html';
                showToast('Авторизация прошла успешно')
            } else {
                showToast('Ошибка авторизации. Пожалуйста, проверьте введенные данные.', 3000);
            }
        })
        .catch(error => {
            showToast('Ошибка авторизации. Пожалуйста, попробуйте еще раз.', 3000);
        });
}document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            event.preventDefault();
            const emailInput = document.getElementById('email-input');
            const passwordInput = document.getElementById('pass-input');
            authenticateUser(emailInput.value, passwordInput.value);
        });
    }

    // Добавьте слушатель события на кнопку "Войти"
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const emailInput = document.getElementById('email-input');
            const passwordInput = document.getElementById('pass-input');
            authenticateUser(emailInput.value, passwordInput.value);
            const preloader = document.getElementById('preloader');
            preloader.style.display = 'none';
        });
    }
});