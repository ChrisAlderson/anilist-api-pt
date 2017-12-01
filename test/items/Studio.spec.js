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
    method: studio.getStudioPage(1)
  }, {
    title: 'should get a studio page with a custom GraphQL query',
    method: studio.getStudioPage(1, studioIdPage)
  }, {
    title: 'should get studio a by id',
    method: studio.getStudio(44)
  }, {
    title: 'should get studio a by id with a custom GraphQL query',
    method: studio.getStudio(44, studioId)
  }, {
    title: 'should search for a studio',
    method: studio.searchStudio('Shaft')
  }, {
    title: 'should search for a studio with a custom GraphQL query',
    method: studio.searchStudio('Shaft', studioSearch)
  }]
  cases.map(executeTests)
})
