'use strict'

const { expect } = require('chai')

const AniListApi = require('../anilist-api-pt')

describe('Characters', () => {

  let anilistApi, id, page, query

  before(done => {
    anilistApi = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 22037
    page = 1
    query = 'Hitagi Senjougahara'

    anilistApi.auth()
      .then(res => done())
      .catch(done)
  })

  it('shoudl get characters', done => {
    anilistApi.characters.getCharacters(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a page of characters', done => {
    anilistApi.characters.getPage(page).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should search for characters', done => {
    anilistApi.characters.searchCharacters(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
