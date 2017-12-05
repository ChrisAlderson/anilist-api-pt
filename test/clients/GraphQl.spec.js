/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')
const {
  HttpTransport,
  GraphQl
} = require('../../lib/clients')

describe.skip('GraphQl', () => {
  let graphQl

  before(() => {
    graphQl = new GraphQl(new HttpTransport())
  })

  it('should make a GraphQL query request', done => {
    expect(true).to.be.true
    done()
  })

  it('should make a GraphQL mutate request', done => {
    expect(true).to.be.true
    done()
  })
})
