'use strict'

const NotFound = require('./libs/NotFound')
const Custom = require('./libs/Custom')

module.exports.NotFound = (name, message, code) => {
	return new NotFound(name, message, code)
}

module.exports.Custom = (name, message, code) => {
	return new Custom(name, message, code)
}