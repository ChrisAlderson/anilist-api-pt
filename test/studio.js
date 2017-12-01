// Import the necessary modules.
const { expect } = require('chai')

const AniListApi = require('..')

/** @test {Studio} */
describe('Studio', () => {
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
   * Hook for setting up the Studio tests.
   * @type {Function}
   */
  before(done => {
    anilist = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 44
    query = 'Shaft'

    anilist.auth()
      .then(res => done())
      .catch(done)
  })

  /** @test {Studio#getStudio} */
  it('should get a studio', done => {
    anilist.studio.getStudio(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Studio#getPage} */
  it('should get a page of studios', done => {
    anilist.studio.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Studio#searchStudio} */
  it('should search for a studio', done => {
    anilist.studio.searchStudio(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
