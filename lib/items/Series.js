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

  getSeriesActivity({id, query = seriesIdActivity}) {
    return this._graphQl.query(query, { id })
  }

  getSeriesAiring({id, type, query = seriesIdAiring}) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  getSeriesCharacters({id, type, page, query = seriesIdCharacters}) {
    return this._graphQl.query(query, {
      id,
      type,
      page
    })
  }

  getSeriesPage({id, type, query = seriesIdPage}) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  getSeriesReviews({id, query = seriesIdReview}) {
    return this._graphQl.query(query, { id })
  }

  getSerie({id, type, query = seriesId}) {
    return this._graphQl.query(query, {
      id,
      type
    })
  }

  searchSeries({term, type, query = seriesSearch}) {
    return this._graphQl.query(query, {
      type,
      query: term
    })
  }

  listSeries({id, query = seriesListId}) {
    return this._graphQl.query(query, { id })
  }

}
