/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const {
  seriesIdActivity,
  seriesIdAiring,
  seriesIdCharacters,
  seriesIdPage,
  seriesIdReview,
  seriesId,
  seriesSearch,
  seriesListId
} = require('../queries')

module.exports = class Series extends AbstractItem {

  getSerieActivity(id, query = seriesIdActivity) {
    return this._graphQl.query(query, { id })
  }

  getSerieAiring(id, type, query = seriesIdAiring) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  getSerieCharaccters(id, type, page, query = seriesIdCharacters) {
    return this._graphQl.query(query, {
      id,
      type,
      page
    })
  }

  getSeriePage(id, type, query = seriesIdPage) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  getSerieReviews(id, query = seriesIdReview) {
    return this._graphQl.query(query, { id })
  }

  getSerie(id, type, query = seriesId) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  searchSeries(q, type, query = seriesSearch) {
    return this._graphQl.query(query, {
      type,
      query: q
    })
  }

  listSeries(id, query = seriesListId) {
    return this._graphQl.query(query, { id })
  }

}
