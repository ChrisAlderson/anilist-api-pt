/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const { tags } = require('../queries')

module.exports = class Tag extends AbstractItem {

  getTagCollection({query = tags} = {}) {
    return this._graphQl.query(query)
  }

}
