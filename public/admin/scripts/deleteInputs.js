// Search
// let closeIngredients = document.getElementsByClassName("closeIngredients")
// let i;

// for (i = 0; i < closeIngredients.length; i++) {
//     closeIngredients[i].addEventListener("click", function() {
//         this.parentElement.style.display = "none";
//     })
// }


// Tentando outra ideia

function deleteInputs(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

// Puxando numero dos Array

let removeInputs = document.getElementsByClassName("closeIngredients")
console.log(removeInputs.length)

for (i = 0; i < removeInputs.length; i++) {
    removeInputs[i].addEventListener("click", function() {
        // let element = document.getElementsByClassName("closeIngredients")
        // element.parentNode.removeChild(element)
        // console.log(i)
    })
}

for (Inputs of removeInputs) {
    Inputs.addEventListener("click", function() {
        console.log(Inputs)
    })
}