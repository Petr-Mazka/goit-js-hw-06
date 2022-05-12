// Задание 6

const inputField = document.querySelector('#validation-input');
const inputFieldCorrect = document.querySelector('input[data-length]');

// Функция для проверки валидности введенного значения

const checkInputValidity = (event) => {
    if(event.target.value.length == inputFieldCorrect.dataset.length) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    } else {
    event.target.classList.remove('valid');
    event.target.classList.add('invalid');
}
}

inputField.addEventListener('blur', checkInputValidity);