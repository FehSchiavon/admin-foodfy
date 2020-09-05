module.exports = {
    ingredients: function (validationInputs) {

        function filterIngredients(ingredients) {
            return ingredients != ""
        }

        let ingredients = validationInputs.filter(filterIngredients)    

        return ingredients
    }
}