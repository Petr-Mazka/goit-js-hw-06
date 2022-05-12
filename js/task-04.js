// Задание 4

let counterValue = 0;
const value = document.querySelector('#value');
const valueNumber = value.textContent;
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

// Функция для четвертого задания
const inputValue = () => {
    const addValue = () => {
        incrementButton.addEventListener('click', () => {counterValue += 1;
        value.textContent = counterValue;
    });
    }
    addValue();
    
    const substractValue = () => {
        decrementButton.addEventListener('click', () => {counterValue -= 1;
        value.textContent = counterValue;
    });
    }
    substractValue();
}
inputValue();