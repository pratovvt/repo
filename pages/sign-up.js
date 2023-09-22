window.addEventListener('beforeunload', function (e) {
    // Предотвращаем действие по умолчанию
    e.preventDefault();
    // Вы можете добавить здесь дополнительные действия или сообщение
    // например, чтобы запросить подтверждение выхода:
    e.returnValue = 'Вы уверены, что хотите покинуть страницу?';
});
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.querySelector('.btn-primary');
    registerButton.addEventListener('click', registerUser);
});
const registerButton = document.getElementById('register-button');

// Добавляем обработчик события "click" на кнопку
registerButton.addEventListener('click', registerUser);
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
function registerUser() {
    const firstname = document.querySelector('[aria-label="Firstname"]').value;
    const lastname = document.querySelector('[aria-label="Lastname"]').value;
    const patronymic = document.querySelector('[aria-label="Patronymic"]').value;
    const email = document.querySelector('[aria-label="Email"]').value;
    const password = document.querySelector('[aria-label="Password"]').value;
    const confirmPassword = document.querySelector('[placeholder="Повтор пароля *"]').value;

    if (!firstname || !lastname || !patronymic || !email || !password || !confirmPassword) {
        showToast('Заполните все обязательные поля');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Пароли не совпадают');
        return;
    }

    // Создайте объект с данными пользователя
    const userData = {
        data:{
            firstname: firstname,
            lastname: lastname,
            patronymic: patronymic,
            email: email,
            password: password,
            status:'active',
            role:'client'
        }
    }
    fetch('http://10.30.56.50:16713/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                showToast('Регистрация прошла успешно');
                // Дополнительные действия после успешной регистрации, например, перенаправление на другую страницу
                window.location.href = '/login.html';
            } else {
                data.error.details.errors.map((e)=>{
                    showToast(`Поле:${e.path} ` + e.message);
                })
            }
        })
}
