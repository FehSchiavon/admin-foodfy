const express = require('express')
const routes = express.Router()
const home = require('./controllers/home')
const recipes = require('./controllers/recipes')

// Home
routes.get('/', home.redirect)
routes.get('/home', home.index)

// Recipes
// CRUD
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('admin/recipes/edit', recipes.edit)

routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)


module.exports = routes
