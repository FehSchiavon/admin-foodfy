// Function ADD newInput
function addIngredient() {
    // const fieldContainer = document.createElement("input")
    // document.body.appendChild(fieldContainer)

    const ingredients = document.querySelector(".ingredientsEditInput")
    const fieldContainer = document.querySelectorAll(".inputIngredients")

    // Clone último ingrediente
    const newField = fieldContainer.cloneNode(true)
    const lengthField = fieldContainer[fieldContainer.length - 1]
    console.log(lengthField)

    // if (newField.children[0].value == "") return false

    // newField.children[0].value == ""
    ingredients.appendChild(newField)

    console.log("OK")
}

document.querySelector("#addIngredients").addEventListener("click", addIngredient)