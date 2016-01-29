'use strict'

const generators = require('yeoman-generator')
const glob = require('globby')
const path = require('path')

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments)
	},

	prompting() {
		let done = this.async()

		this.prompt([ {
			type: 'input',
			name: 'package',
			message: 'Your package name',
			default: this.appname
		} ], (answers) => {
			this._answers = answers
			done()
		})
	},

	writing() {
		let done = this.async()
		let tplPath = this.templatePath()
		let dstPath = this.destinationRoot()

		glob([ tplPath + '/**/*.*', tplPath + '/**/.*' ])
			.then(files => {
				for (let f of files) {
					let relPath = path.relative(tplPath, f)
					this.fs.copyTpl(tplPath + '/' + relPath, dstPath + '/' + relPath, this._answers)
				}
				done()
			})
			.catch(e => done(e))

		// this.log(this._answers)
		// console.log(this.sourceRoot())
		// console.log(this.destinationRoot())
	},

	installing() {
		this.installDependencies()
	}
})
