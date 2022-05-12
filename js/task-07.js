// Задание 7

const inputController = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const spanTextContent = spanText.textContent;

// Функция для седьмого задания

const changeFontSize = () => {
    spanText.style.fontSize = inputController.value + 'px';
    inputController.addEventListener('input', () => {
        spanText.style.fontSize = inputController.value + 'px';
    }
    );}
changeFontSize();