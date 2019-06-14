'use strict'

module.exports = {
	boot (app, {config, errors}) {
		app.use(errors)
	}
}