const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')


const app = express(); // criando a aplicação

app.use(cors())
app.use(express.json()) // assim a aplicação pode interpretar json, transformando em onj js
app.use(routes)
app.use(errors())

module.exports = app