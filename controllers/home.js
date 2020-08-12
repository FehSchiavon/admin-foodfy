const dataOld = require('../data')

exports.redirect = function(req, res) {
    return res.redirect('/index')
}

exports.index = function(req, res) {
    return res.render('global/index', { recipes: dataOld })
}

exports.about = function(req, res) {
    return res.render('global/about')
}

exports.notfound = function(req, res) {
    return res.render('global/not-found')
}

exports.recipes = function(req, res) {
    return res.render('global/recipes', { recipes: dataOld })
}

exports.description = function(req, res) {
    const recipesId = req.param.id
    const recipe = recipes[recipesId]

    return res.render('global/recipesDescription', { item: recipe })
}