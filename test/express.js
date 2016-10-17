'use strict'

const request = require('supertest')
const app = require('../server.js')

// Using supertest
describe('', () => {
	it('should respond with Hello Nurse', () => {
		request(app)
			.get('/')
			.expect(200)
			.expect('Hello Nurse')
			.end(done)
		// res.send === 'Hello Nurse'
	})
})