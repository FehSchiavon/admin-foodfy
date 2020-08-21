const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('admin/index')
}

exports.create = function(req, res) {
    return res.render('admin/create')
}

exports.show = function(req, res) {
    return res.render('admin/show')
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

    const id = Number(data.recipes.length + 1)

}