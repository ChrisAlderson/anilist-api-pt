/* eslint-disable no-unused-expressions */
const { expect } = require('chai')

module.exports = function executeTests({title, method}) {
  it(title, done => {
    method.then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })
}
