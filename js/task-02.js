// Задание 2

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');
const ingredientsListLength = ingredients.length;

// Функция для второго задания

const createList = () => {
  for (let i = 0; i < ingredientsListLength; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = ingredients[i];
    ingredientsList.append(listItem);
  }
}
createList();