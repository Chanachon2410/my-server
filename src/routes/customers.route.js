const express = require('express')
const app = express.Router()

const controller = require('../controllers/customers.controllers')

app.get('/', controller.get)

app.get('/:id', controller.getById)

app.get('/name/:name', controller.getName)
app.post('/', controller.create)
app.put('/:id', controller.getById)
app.patch('/:id', controller.patch)
app.delete('/:id', controller.rmCustomers)

module.exports = app