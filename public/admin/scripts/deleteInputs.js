// Search
let closeIngredients = document.getElementsByClassName("closeIngredients")
let i;

for (i = 0; i < closeIngredients.length; i++) {
    closeIngredients[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    })
}