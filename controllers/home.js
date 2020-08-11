// Redirect
exports.redirect = function(req, res) {
    return res.redirect('/index')
}

// Home
exports.index = function(req, res) {
    return res.render('global/index')
}