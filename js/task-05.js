//Задание 5

//Функция для пятого задания
const inputPlace = document.querySelector('#name-input');
const outputPlace = document.querySelector('#name-output');

const greeting = () => {
    inputPlace.addEventListener('input', () => {
        if(event.target.value === ""){
            outputPlace.textContent = "Anonymous!";
        }else{
            outputPlace.textContent = event.currentTarget.value;
        }
        });
    }
greeting();