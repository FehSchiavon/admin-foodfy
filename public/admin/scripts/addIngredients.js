// Function ADD newInput
function addIngredient() {
    const ingredients = document.querySelector(".ingredientsEdit")
    const fieldContainer = document.querySelector(".inputIngredients")

    const newField = fieldContainer[fieldContainer.lenght - 1].cloneNode(true)
    console.log("OK")
}

document.querySelector("#addIngredients").addEventListener("click", addIngredient)