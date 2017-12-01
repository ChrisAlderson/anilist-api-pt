// Import the necessary modules.
const { expect } = require('chai')

const AniListApi = require('..')

/** @test {Staff} */
describe('Staff', () => {
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
   * Hook for setting up the Staff tests.
   * @type {Function}
   */
  before(done => {
    anilist = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 95061
    query = 'Chiwa Saito'

    anilist.auth()
      .then(res => done())
      .catch(done)
  })

  /** @test {Staff#getStaff} */
  it('should get a staff members', done => {
    anilist.staff.getStaff(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Staff#getPage} */
  it('should get a page of staff members', done => {
    anilist.staff.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Staff#searchStaff} */
  it('should search for staff members', done => {
    anilist.staff.searchStaff(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
