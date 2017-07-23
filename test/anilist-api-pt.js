'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

/** @test {AniListApi} */
describe('AniListApi', () => {
  /* @test {AniListApi#auth} */
  it('should throw an error when no client id or secret are given', done => {
    try {
      const anilistApi = new AniListApi()
      anilistApi.auth()
        .then(done)
        .catch(done)
    } catch (err) {
      expect(err).to.be.an('Error')
      done()
    }
  })
})
