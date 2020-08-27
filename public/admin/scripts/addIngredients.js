// Function ADD newInput
function addIngredient() {

    const ingredients = document.querySelector(".ingredientsEditInputAll")
    const fieldContainer = document.querySelector(".ingredientsEditInput")

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false

    // Deixa o valor do input vazio
    newField.children[0].value = ""
    ingredients.appendChild(newField)


    // Clone último ingrediente
    // const newField = fieldContainer.cloneNode(true)

    // const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    // const lengthField = fieldContainerAll.length - 1
    // const cloneField = lengthField.cloneNode(true)
    // console.log(lengthField)

    // if (newField.children[0].value == "") return false

    // newField.children[0].value = ""
    // ingredients.appendChild(newField)
    // ingredients.appendChild(cloneField)

    console.log("OK")
}

document.querySelector("#addIngredients").addEventListener("click", addIngredient)