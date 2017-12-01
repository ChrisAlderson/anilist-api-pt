const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const {
  characterIdPage,
  characterId,
  characterSearch
} = require('../../lib/queries')

describe('Character', () => {
  const { character } = new AnilistApi()

  const cases = [{
    title: 'should get a character page',
    method: character.getCharacterPage(1)
  }, {
    title: 'should get a character page with a custom GraphQL query',
    method: character.getCharacterPage(1, characterIdPage)
  }, {
    title: 'should get a character by id',
    method: character.getCharacter(22037)
  }, {
    title: 'should get a character by id with a custom GraphQL query',
    method: character.getCharacter(22037, characterId)
  }, {
    title: 'should search for a character',
    method: character.searchCharacter('Hitagi Senjougahara')
  }, {
    title: 'should search for a character with a custom GraphQL query',
    method: character.searchCharacter('Hitagi Senjougahara', characterSearch)
  }]
  cases.map(executeTests)
})
