/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')
const { HttpTransport } = require('../../lib/clients')

describe('HttpTransport', () => {
  let httpTransport

  before(() => {
    httpTransport = new HttpTransport()
  })

  it('should be a dummy test', () => {
    expect(true).to.be.true
  })
})
