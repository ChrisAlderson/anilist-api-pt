/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const {
  userActivityIdReply,
  userActivityId,
  userActivity,
  userAiring,
  userIdActivity,
  userIdFavourites,
  userIdFollowers,
  userIdFollowing,
  userIdSeriesListRaw,
  userId,
  userSeriesList,
  userSearch,
  user
} = require('../queries')

module.exports = class User extends AbstractItem {

  // get({query = }) {
  //   return this._graphQl.query()
  // }

}
