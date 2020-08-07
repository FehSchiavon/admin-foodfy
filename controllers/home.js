// Redirect
exports.redirect = function(req, res) {
    return res.render('/')
}

// Home
exports.home = function(req, res) {
    return res.render('/home')
}