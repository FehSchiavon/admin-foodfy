// Remove Inputs Ingredients
let removeInputsIngredients = document.getElementsByClassName("closeIngredients")
// console.log(removeInputsIngredients.length)

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


// Remove Inputs Preparation
let removeInputsPreparation = document.querySelectorAll("#closePreparation")
console.log(removeInputsPreparation.length)

for (let i = 0; i < removeInputsPreparation.length; i++) {
    removeInputsPreparation[i].addEventListener("click", function() {
        
        let parentInputsPreparation = this.parentElement
        parentInputsPreparation.parentNode.removeChild(parentInputsPreparation)
        
    })
}

// Novos Botoes 
// function newClosePreparation() {
//     let parentInputsPreparation = this.parentElement
//     parentInputsPreparation.parentNode.removeChild(parentInputsPreparation)
// }