// Задание 8

const mainForm = document.querySelector(".login-form");
const mailInput = mainForm.elements.email;
const passwordInput = mainForm.elements.password;
const submitButton = mainForm.lastElementChild;
const fields = mainForm.querySelectorAll("label");
const fieldsArray = Array.from(fields);
const fieldsNames = fieldsArray.map(field => field.firstChild.textContent);
const firstField = fieldsNames[0];
const lastField = fieldsNames[1];

const userData = {
    email: '',
    password: ''
}

// Функция для восьмого задания

const getUserData = () => {
    mailInput.addEventListener('input', (event) => {
        userData.email = event.target.value;
    });
    passwordInput.addEventListener('input', (event) => {
        userData.password = event.target.value;
    });
    mainForm.addEventListener('submit', (event) => {
        if (userData.email === '' || userData.password === '') {
            alert('Please, fill in all fields');
        } else {
            console.log(userData);
            mainForm.reset();
        };
    });
    mainForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });
}
getUserData();