'use strict'

const errors = require('./../../tools/errors')

module.exports = (err, req, res, next) => {
	switch(err.name) {
		case 'ReferenceError':
			res.json(errors.Custom(err.name, err.message))
		break 
		case 'NotFound':
			res.json(errors.NotFound())
		break
	}
	next(err)
}