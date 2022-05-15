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

// Напиши скрипт, который с помошью метода map для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

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