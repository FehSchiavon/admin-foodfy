const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('/index')
}