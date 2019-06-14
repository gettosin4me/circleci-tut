'use strict'

const Base = require('./../base')

class Custom extends Base
{
	constructor(name, message, code) {
		super();
		Error.captureStackTrace(this)

	  	this.name = name
	  	this.message = message
	  	this.code = code
	}
}

module.exports = Custom