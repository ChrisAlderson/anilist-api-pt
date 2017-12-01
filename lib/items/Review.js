/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const { reviewId } = require('../queries')

module.exports = class Review extends AbstractItem {

  getReview(id) {
    return this._graphQl.query(reviewId, { id })
  }

}
