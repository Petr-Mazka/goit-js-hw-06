// Задание 1

const categories = document.querySelector('#categories');
const categoriesList = categories.querySelectorAll('li.item');
const categoriesListLength = categoriesList.length;

//Функция для первого задания

const getCategory = () => {
    console.log(`Number of categories: ${categoriesListLength}`);
    categoriesList.forEach((category) => {
        const categoryTitle = category.querySelector('h2').textContent;
        const categoryList = category.querySelectorAll('li');
        const categoryListLength = categoriesList.length;
        console.log(`Category: ${categoryTitle}
Elements: ${categoryListLength}`);
    });
}
getCategory();