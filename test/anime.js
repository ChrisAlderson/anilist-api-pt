'use strict'

const { expect } = require('chai')
const AniListApi = require('../anilist-api-pt')

/** @test {Anime} */
describe('Anime', () => {
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
   * The page to test with.
   * @type {number}
   */
  let page

  /**
   * The query to test with.
   * @type {Object}
   */
  let query

  /**
   * Hook for setting up the Anime tests.
   * @type {Function}
   */
  before(done => {
    console.warn = () => {}
    anilist = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      debug: true
    })

    id = 5081
    page = 1
    query = 'Bakemonogatari'

    anilist.auth()
      .then(() => done())
      .catch(done)
  })

  /** @test {Anime#getAnime} */
  it('should get an anime', done => {
    anilist.anime.getAnime(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Anime#getPage} */
  it('should get a page of animes', done => {
    anilist.anime.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Anime#getCharacters} */
  it('should get characters', done => {
    anilist.anime.getCharacters(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Anime#getAiring} */
  it('should get airing list', done => {
    anilist.anime.getAiring(id).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  /** @test {Series#getGenres} */
  it('should get a list of genres', done => {
    anilist.anime.getGenres().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  /** @test {Anime#browseAnime} */
  it('should browse anime', done => {
    anilist.anime.browseAnime({
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

  /** @test {Anime#browseAnime} */
  it('should throw an error when trying to browse for anime', () => {
    const { browseAnime } = anilist.anime

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

  /** @test {Anime#searchAnime} */
  it('should search for animes', done => {
    anilist.anime.searchAnime(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
