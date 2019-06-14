'use strict'

const Base = require('./../base')

class NotFound extends Base
{
	constructor(name, message, code) {
	  super()
	  Error.captureStackTrace(this, this.constructor)

	  this.name = name || 'NotFound'
	  this.message = message || 'Not Found Exception'
		this.code = code || 404
	}
}

module.exports = NotFound