const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const addListItem = () => {
  const ingredientListElement = ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = ingredient;
    const listItemClass = listItem.classList.add("item");
    list.appendChild(listItem);
  });
}
addListItem();