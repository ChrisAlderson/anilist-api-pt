/* eslint-disable no-unused-vars */
const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const { tags } = require('../../lib/queries')

describe('Tag', () => {
  const { tag } = new AnilistApi()

  const cases = [{
    title: 'should get a list of tags',
    method: tag.getTagCollection()
  }, {
    title: 'should get a list of tags with a custom GraphQL query',
    method: tag.getTagCollection(tags)
  }]
  cases.map(executeTests)
})
