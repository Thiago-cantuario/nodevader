const express = require('express')
var findup = require('findup-sync')
var config = require(findup('config.json'))
const routes = require('./routes')
const moment = require('moment')

const app = express()
const baseEndpoint = config.baseEndpoint
const port = config.server.port
const timeStart = moment().format('DD/MM/YYYY HH:mm')

app.use(baseEndpoint, routes)
app.listen(port, () => console.log(`Running on port ${port}. Started at: ${timeStart}`))
