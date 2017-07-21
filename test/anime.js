'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

describe('Anime', () => {

  let anilistApi, id, page, query

  before(done => {
    console.warn = () => {}
    anilistApi = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      debug: true
    })

    id = 5081
    page = 1
    query = 'Bakemonogatari'

    anilistApi.auth()
      .then(() => done())
      .catch(done)
  })

  it('should get an anime', done => {
    anilistApi.anime.getAnime(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get a page of animes', done => {
    anilistApi.anime.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get characters', done => {
    anilistApi.anime.getCharacters(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  it('should get airing list', done => {
    anilistApi.anime.getAiring(id).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  it('should get a list of genres', done => {
    anilistApi.anime.getGenres().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  it('should browse anime', done => {
    anilistApi.anime.browseAnime({
      year: 2009,
      season: 'summer',
      type: 'tv',
      status: 'finished_airing',
      genres: 'Mystery,Romance,Supernatural',
      genres_exclude: 'Action,Adventure,Comedy,Drama,Ecchi,Fantasy,Horror,Music,Psychological,Slice of Life,Sci-Fi,Thriller,Sports,Mecha',
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

  it('should throw an error when trying to browse for anime', () => {
    const { browseAnime } = anilistApi.anime
    expect(browseAnime.bind(browseAnime, {
      season: 'winter',
      status: 'faulty' 
    })).to.throw('faulty is not a valid value for status with seriesType: \'anime\'!')
    expect(browseAnime.bind(browseAnime, {
      season: 'faulty',
      status: 'finished_airing'
    })).to.throw('faulty is not a valid value for season!')
    expect(browseAnime.bind(browseAnime, {
      year: 'faulty',
      season: 'winter', 
      status: 'finished_airing'
    })).to.throw('faulty is not a valid value for year!')

    expect(browseAnime.bind(browseAnime, {
      type: 'faulty',
      season: 'winter', 
      status: 'finished_airing'
    })).to.throw('faulty is not a valid value for type!')
    expect(browseAnime.bind(browseAnime, {
      sort: 'faulty',
      season: 'winter', 
      status: 'finished_airing'
    })).to.throw('faulty is not a valid value for sort!')
    expect(browseAnime.bind(browseAnime, {
      order: 'faulty',
      season: 'winter', 
      status: 'finished_airing'
    })).to.throw('faulty is not a valid value for order!')
  })

  it('should search for animes', done => {
    anilistApi.anime.searchAnime(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
