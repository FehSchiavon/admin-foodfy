// Function ADD newInput
function addIngredient() {
    // const fieldContainer = document.createElement("input")
    // document.body.appendChild(fieldContainer)

    const ingredients = document.querySelector(".ingredientsEdit")
    const fieldContainer = document.querySelector(".ingredientsEditInput")
    const fieldContainerAll = document.querySelectorAll(".ingredientsEditInput")

    // Clone último ingrediente
    const newField = fieldContainer.cloneNode(true)

    // const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    const lengthField = fieldContainerAll.length - 1
    // const cloneField = lengthField.cloneNode(true)
    console.log(lengthField)

    // if (newField.children[0].value == "") return false

    // newField.children[0].value = ""
    ingredients.appendChild(newField)
    // ingredients.appendChild(cloneField)

    console.log("OK")
}

document.querySelector("#addIngredients").addEventListener("click", addIngredient)