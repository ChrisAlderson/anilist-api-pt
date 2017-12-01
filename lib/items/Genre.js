/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const { genreList } = require('../queries')

module.exports = class Genre extends AbstractItem {

  getGenreList(query = genreList) {
    return this._graphQl.query(query)
  }

}
