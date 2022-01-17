let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientList = recipeObj.ingredients;
for (let ingredient of ingredientList) {
    let ingredientListContainerElement = document.getElementById("ingredientListContainer");
    let ingredientElement = document.createElement("li");
    ingredientElement.textContent = ingredient;
    ingredientElement.classList.add("ingredient");
    ingredientListContainerElement.appendChild(ingredientElement);
}
let recipeTitleElement = document.getElementById("recipeTitle");
let imgContainerElement = document.getElementById("imgContainer");
let imgElement = document.getElementById("img");

recipeTitleElement.textContent = recipeObj.title;
imgElement.setAttribute("src", recipeObj.imgSrc);
imgElement.classList.add("w-100");
imgContainerElement.appendChild(imgElement);

