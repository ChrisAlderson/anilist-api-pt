const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const {
  studioIdPage,
  studioId,
  studioSearch
} = require('../../lib/queries')

describe('Studio', () => {
  const { studio } = new AnilistApi()

  const cases = [{
    title: 'should get a studio page',
    method: studio.getStudioPage.bind(studio),
    args: {
      id: 1
    }
  }, {
    title: 'should get a studio page with a custom GraphQL query',
    method: studio.getStudioPage.bind(studio),
    args: {
      id: 1,
      query: studioIdPage
    }
  }, {
    title: 'should get studio a by id',
    method: studio.getStudio.bind(studio),
    args: {
      id: 44
    }
  }, {
    title: 'should get studio a by id with a custom GraphQL query',
    method: studio.getStudio.bind(studio),
    args: {
      id: 44,
      query: studioId
    }
  }, {
    title: 'should search for a studio',
    method: studio.searchStudio.bind(studio),
    args: {
      term: 'Shaft'
    }
  }, {
    title: 'should search for a studio with a custom GraphQL query',
    method: studio.searchStudio.bind(studio),
    args: {
      term: 'Shaft',
      query: studioSearch
    }
  }]
  cases.map(executeTests)
})
