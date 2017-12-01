/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const { tags } = require('../queries')

module.exports = class Series extends AbstractItem {

  getTagCollection() {
    return this._graphQl.query(tags)
  }

}