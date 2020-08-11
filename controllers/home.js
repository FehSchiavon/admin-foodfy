exports.redirect = function(req, res) {
    return res.redirect('/index')
}

exports.index = function(req, res) {
    return res.render('global/index')
}

exports.about = function(req, res) {
    return res.render('global/about')
}

exports.notfound = function(req, res) {
    return res.render('global/not-found')
}

exports.recipes = function(req, res) {
    return res.render('global/recipes')
}

exports.description = function(req, res) {
    return res.render('global/recipesDescription')
}