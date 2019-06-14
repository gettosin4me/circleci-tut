'use strict'

const express = require('express')
const ctrl = require('./../controllers/app')
const errors = require('./../../tools/errors')

module.exports = () => {
    let router = express.Router()

    //enable user routes
    require('./app')(router, ctrl)
    
    return router
}