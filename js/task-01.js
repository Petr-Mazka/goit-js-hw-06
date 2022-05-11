// Задание 1

const categoryList = document.querySelector(".categories");
const categories = document.querySelectorAll(".item");
const categoriesArray = Array.from(categories);
const title = document.querySelectorAll("h2");
const nameArray = [];
const titleArray = [...title];
const categoriesItems = document.querySelectorAll("li.item > ul");
const catItemsArray = [...categoriesItems];

// Функция для первого задания
const categoriesCounter = () => {
    const catArrayLength = categoriesArray.length;
    console.log(`Number of categories : ${catArrayLength}`);

    for (const item of titleArray) {
        const name = item.textContent;
        nameArray.push(name);
    }
    
    
    for ( let i = 0; i < catArrayLength; i += 1) {
        console.log(`Category : ${nameArray[i]}
Count : ${catItemsArray[i].children.length}`);
    }
}
categoriesCounter();