'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

describe('Studio', () => {

  let anilistApi, id, query

  before(done => {
    anilistApi = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 44
    query = 'Shaft'

    anilistApi.auth()
      .then(res => done())
      .catch(done)
  })

  it('should get a studio', done => {
    anilistApi.studio.getStudio(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a page of studios', done => {
    anilistApi.studio.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should search for a studio', done => {
    anilistApi.studio.searchStudio(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
