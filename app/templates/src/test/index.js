import chai from 'chai'
chai.should()

describe('index.js', () => {
	it('should pause', async () => {
		let start = new Date().getTime()

		await require('../main').default

		let diff = new Date().getTime() - start
		diff.should.be.at.least(20)
	})
})
