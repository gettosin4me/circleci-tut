'use strict'

module.exports = {
    get routes () {
       return require('./routes')
    },

    get errors () {
    	return require('./errors')
    }
}