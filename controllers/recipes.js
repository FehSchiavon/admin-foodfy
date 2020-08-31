const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    const recipesAll = data.recipes.map(function(recipe) {
        const recipesPart = {
            ...recipe
        }
        return recipesPart
    })

    return res.render('admin/index', { recipes: recipesAll })
}

exports.create = function(req, res) {
    return res.render('admin/create')
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundRecipes = data.recipes.find(function(recipe) {
        return id == recipe.id
    })

    if (!foundRecipes) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipes
    }

    return res.render('admin/show', { recipe })
}

exports.edit = function(req, res) {
    // const { id } = req.params
    return res.render('admin/edit')
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)
    console.log(keys)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send('Please, fill all fields')
    }

    let { image, title, author, ingredients, preparation, information } = req.body

    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information,
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send('Write file error!')
        return res.redirect('/admin/recipes')
    })

}