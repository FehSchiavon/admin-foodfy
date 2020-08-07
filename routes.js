const express = require('express')
const routes = express.Router()
const home = require('./controllers/home')
const recipes = require('./controllers/recipes')

// Home
routes.get('/', home.redirect)
routes.get('/home', home.index)

// Recipes
// CRUD



module.exports = routes
