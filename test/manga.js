'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

describe('Manga', () => {
  let anilistApi, id, page, query

  before(done => {
    anilistApi = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 44893
    page = 1
    query = 'Bakemonogatari'

    anilistApi.auth()
      .then(res => done())
      .catch(done)
  })

  it('should get a manga', done => {
    anilistApi.manga.getManga(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a page of mangas', done => {
    anilistApi.manga.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get characters', done => {
    anilistApi.manga.getCharacters(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a list of genres', done => {
    anilistApi.manga.getGenres().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  it('should browse manga', done => {
    anilistApi.manga.browseManga({
      year: 1997,
      season: 'summer',
      type: 'manga',
      status: 'publishing',
      genres: 'Action,Adventure,Comedy,Fantasy',
      genres_exclude: 'Ecchi,Horror,Mahou%20Shoujo,Mecha,Music,Thriller,Supernatural,Sports,Slice%20of%20Life,Sci-Fi,Romance,Psychological,Mystery,Drama',
      sort: 'popularity',
      order: 'desc',
      airing_data: true,
      full_page: true,
      page
    }).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  it('should throw an error when trying to browse for manga', () => {
    const { browseManga } = anilistApi.manga
    expect(browseManga.bind(browseManga, {
      season: 'winter',
      status: undefined
    })).to.throw('undefined is not a valid value for status with seriesType: \'manga\'!')
  })
  it('should search for mangas', done => {
    anilistApi.manga.searchManga(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
