'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

/** @test {Characters} */
describe('Characters', () => {
  /**
   * The AniListApi instance.
   * @type {AniListApi}
   */
  let anilist

  /**
   * The id to test with.
   * @type {number}
   */
  let id

  /**
   * The query to test with.
   * @type {Object}
   */
  let query

  /**
   * Hook for setting up the Characters tests.
   * @type {Function}
   */
  before(done => {
    anilist = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 22037
    query = 'Hitagi Senjougahara'

    anilist.auth()
      .then(res => done())
      .catch(done)
  })

  /** @test {Characters#getCharacters} */
  it('shoudl get characters', done => {
    anilist.characters.getCharacter(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Characters#getPage} */
  it('should get a page of characters', done => {
    anilist.characters.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Characters#searchCharacters} */
  it('should search for characters', done => {
    anilist.characters.searchCharacters(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
