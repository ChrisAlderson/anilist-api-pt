/* eslint-disable require-jsdoc */
const character = require('./character')
const series = require('./series')
const staff = require('./staff')
const studio = require('./studio')
const user = require('./user')
const genreList = require('./genre-list.graphql')
const reviewId = require('./review-id.graphql')
const tags = require('./tags.graphql')

module.exports = Object.assign({},
  character,
  series,
  staff,
  studio,
  user, {
  genreList,
  reviewId,
  tags
})
