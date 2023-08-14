// Controller
const express = require('express')
const bodyParser = require('body-parser')
// router allows us to create a dynamic router
const routes = express.Router()
// Import all model's objects
const {users} = require('../model')

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
routes.put('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.delete('./user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

module.exports = {
    express,
    routes
}