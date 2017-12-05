/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

module.exports = function executeTests({title, method, args}) {
  it(title, done => {
    method(args).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })
}
