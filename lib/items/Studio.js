/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const {
  studioIdPage,
  studioId,
  studioSearch
} = require('../queries')

module.exports = class Studio extends AbstractItem {

  getStudioPage(id, query = studioIdPage) {
    return this._graphQl.query(query, { id })
  }

  getStudio(id, query = studioId) {
    return this._graphQl.query(query, { id })
  }

  searchStudio(term, query = studioSearch) {
    return this._graphQl.query(query, {
      query: term
    })
  }

}
