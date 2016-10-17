'use strict'

const request = require('supertest')
const app = require('../server')

describe('express', () => {
  it('should respond with Hello Nurse', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello Nurse')
      .end(done)
  })
})