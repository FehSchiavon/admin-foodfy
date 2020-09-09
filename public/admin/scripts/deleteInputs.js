// Tentando outra ideia

function deleteInputs(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// Puxando numero dos Array

let removeInputsIngredients = document.getElementsByClassName("closeIngredients")
console.log(removeInputsIngredients.length)

for (let i = 0; i < removeInputsIngredients.length; i++) {
    removeInputsIngredients[i].addEventListener("click", function() {

        // Remove mesmo a DIV
        let parentInputsIngredients = this.parentElement
        parentInputsIngredients.parentNode.removeChild(parentInputsIngredients)

        // Deixa somente Invisivel
        // this.parentElement.style.display = 'none'
        // console.log(this.parentElement)

    })
}