'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

describe('Staff', () => {

  let anilistApi, id, query

  before(done => {
    anilistApi = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 95061
    query = 'Chiwa Saito'

    anilistApi.auth()
      .then(res => done())
      .catch(done)
  })

  it('should get a staff members', done => {
    anilistApi.staff.getStaff(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a page of staff members', done => {
    anilistApi.staff.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should search for staff members', done => {
    anilistApi.staff.searchStaff(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
