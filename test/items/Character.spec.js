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
    method: character.getCharacterPage.bind(character),
    args: {
      id: 1
    }
  }, {
    title: 'should get a character page with a custom GraphQL query',
    method: character.getCharacterPage.bind(character),
    args: {
      id: 1,
      query: characterIdPage
    }
  }, {
    title: 'should get a character by id',
    method: character.getCharacter.bind(character),
    args: {
      id: 22037
    }
  }, {
    title: 'should get a character by id with a custom GraphQL query',
    method: character.getCharacter.bind(character),
    args: {
      id: 22037,
      query: characterId
    }
  }, {
    title: 'should search for a character',
    method: character.searchCharacter.bind(character),
    args: {
      term: 'Hitagi Senjougahara'
    }
  }, {
    title: 'should search for a character with a custom GraphQL query',
    method: character.searchCharacter.bind(character),
    args: {
      term: 'Hitagi Senjougahara',
      query: characterSearch
    }
  }]
  cases.map(executeTests)
})
