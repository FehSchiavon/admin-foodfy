const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('admin/index')
}

exports.show = function(req, res) {
    return res.render('admin/show')
}