/* eslint-disable no-unused-vars */
const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const { reviewId } = require('../../lib/queries')

describe('Review', () => {
  const { review } = new AnilistApi()

  const cases = [{
    title: 'should get a review',
    method: review.getReview.bind(review),
    args: {
      id: 1
    }
  }, {
    title: 'should get a review with a custom GraphQL query',
    method: review.getReview.bind(review),
    args: {
      id: 1,
      query: reviewId
    }
  }]
  cases.map(executeTests)
})
