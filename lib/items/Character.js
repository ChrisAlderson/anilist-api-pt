/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const {
  characterIdPage,
  characterId,
  characterSearch
} = require('../queries')

module.exports = class Character extends AbstractItem {

  getCharacterPage(id, query = characterIdPage) {
    return this._graphQl.query(query, { id })
  }

  getCharacter(id, query = characterId) {
    return this._graphQl.query(query, { id })
  }

  searchCharacter(term, query = characterSearch) {
    return this._graphQl.query(query, {
      query: term
    })
  }

}
