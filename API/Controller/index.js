// Controller
const express = require('express')
const bodyParser = require('body-parser')
const {verrifyAToken} = require('../middleware/AuthenticateUser')
// router allows us to create a dynamic router
const routes = express.Router()
// Import all model's objects
const {users, books, bookAuthor} = require('../model')

// ================User's Router=================
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

// ================Book's Router=================
routes.post('/addbook', bodyParser.json(), (req, res)=>{
    books.register(req, res)
})

routes.get('/books', (req, res)=>{
    books.fetchBooks(req, res)
})

routes.get('/book/:id', (req, res)=>{
    books.fetchBook(req, res)
})

routes.put('/book/:id', bodyParser.json(), (req, res)=>{
    books.updateBook(req, res)
})
routes.patch('/book/:id', bodyParser.json(), (req, res)=>{
    books.updateBook(req, res)
})

routes.delete('/book/:id', (req, res)=>{
    books.deleteBook(req, res)
})

// ================Book Author's Router=================
routes.post('/addauthor', bodyParser.json(), (req, res)=>{
    bookAuthor.register(req, res)
})

routes.get('/authors', (req, res)=>{
    bookAuthor.fetchAuthors(req, res)
})

routes.get('/author/:id', (req, res)=>{
    bookAuthor.fetchAuthor(req, res)
})

routes.put('/author/:id', bodyParser.json(), (req, res)=>{
    bookAuthor.updateAuthor(req, res)
})
routes.patch('/author/:id', bodyParser.json(), (req, res)=>{
    bookAuthor.updateAuthor(req, res)
})

module.exports = {
    express,
    routes,
    verrifyAToken
}