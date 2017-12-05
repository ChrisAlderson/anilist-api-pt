/* eslint-disable no-unused-vars */
const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const { genreList } = require('../../lib/queries')

describe('Genre', () => {
  const { genre } = new AnilistApi()

  const cases = [{
    title: 'should get a genre list',
    method: genre.getGenreList.bind(genre)
  }, {
    title: 'should get a genre list with a custom GraphQL query',
    method: genre.getGenreList.bind(genre),
    args: {
      query: genreList
    }
  }]
  cases.map(executeTests)
})
