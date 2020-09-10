// Remove Inputs Ingredients
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

let removeInputsIngredients = document.getElementsByClassName("closeIngredients")
// console.log(removeInputsIngredients.length)



// Remove Inputs Preparation
for (let i = 0; i < removeInputsPreparation.length; i++) {
    removeInputsPreparation[i].addEventListener("click", function() {
        
        let parentInputsPreparation = this.parentElement
        parentInputsPreparation.parentNode.removeChild(parentInputsPreparation)
        
    })
}

let removeInputsPreparation = document.querySelectorAll("#closePreparation")
console.log(removeInputsPreparation.length)