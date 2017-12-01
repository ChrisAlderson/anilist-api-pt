// Import the necessary modules.
const { expect } = require('chai')

const AniListApi = require('..')

/** @test {Manga} */
describe('Manga', () => {
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
   * Hook for setting up the Manga tests.
   * @type {Function}
   */
  before(done => {
    anilist = new AniListApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    })

    id = 44893
    page = 1
    query = 'Bakemonogatari'

    anilist.auth()
      .then(res => done())
      .catch(done)
  })

  /** @test {Manga#getManga} */
  it('should get a manga', done => {
    anilist.manga.getManga(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Manga#getPage} */
  it('should get a page of mangas', done => {
    anilist.manga.getPage().then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Manga#getCharacters} */
  it('should get characters', done => {
    anilist.manga.getCharacters(id).then(res => {
      expect(res).to.be.an('object')
      done()
    }).catch(done)
  })

  /** @test {Series#getGenres} */
  it('should get a list of genres', done => {
    anilist.manga.getGenres().then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })

  /** @test {Manga#browseManga} */
  it('should browse manga', done => {
    anilist.manga.browseManga({
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

  /** @test {Manga#browseManga} */
  it('should throw an error when trying to browse for manga', done => {
    anilist.manga.browseManga({
      season: 'winter',
      status: 'faulty'
    }).then(done)
      .catch(err => {
        expect(err).to.be.an('Error')
        expect(err.message).to.equal(
          'faulty is not a valid value for status with seriesType: \'manga\'!'
        )

        done()
      })
  })

  /** @test {Manga#searchManga} */
  it('should search for mangas', done => {
    anilist.manga.searchManga(query).then(res => {
      expect(res).to.be.an('array')
      done()
    }).catch(done)
  })
})
