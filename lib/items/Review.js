/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const { reviewId } = require('../queries')

module.exports = class Review extends AbstractItem {

  getReview({id, query = reviewId}) {
    return this._graphQl.query(query, { id })
  }

}
