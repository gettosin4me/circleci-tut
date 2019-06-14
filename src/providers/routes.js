'use strict'

const errors = require('./../tools/errors')

module.exports = {
    boot (app, {config, routes}) {
        app.use(routes())
        app.use((req, res, next) => {
            res.json(errors.NotFound())
        })
    }
}