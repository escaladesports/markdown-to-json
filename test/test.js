'use strict'
const toJson = require('../index')

toJson('./test', './out')
	.then(() => console.log('Done!'))
	.catch(console.error)
