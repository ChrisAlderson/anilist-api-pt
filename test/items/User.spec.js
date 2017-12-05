/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai')
const AnilistApi = require('../../lib')

describe.skip('User', () => {
  const { user } = new AnilistApi()

  it('should be a dummy test', () => {
    expect(true).to.be.true
  })
})
