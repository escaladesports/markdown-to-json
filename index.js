'use strict'
const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const json = require('metalsmith-to-json')

module.exports = (src, out) => {
	return new Promise((resolve, reject) => {
		Metalsmith(__dirname)
			.source(src)
			.destination(out)
			.use(markdown())
			.use(json({
				outputPath: ''
			}))
			.build(err => {
				if(err) reject(err)
				else resolve()
			})
	})
}
