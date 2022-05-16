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

const addListItem = () => {
const ingredientsListItem = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  return li;
});
ingredientsList.append(...ingredientsListItem);
console.log("hi");
}
addListItem();