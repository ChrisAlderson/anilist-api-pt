/* eslint-disable require-jsdoc */
const AbstractItem = require('./AbstractItem')
const {
  staffIdPage,
  staffId,
  staffSearch
} = require('../queries')

module.exports = class Staff extends AbstractItem {

  getStaffPage(id, query = staffIdPage) {
    return this._graphQl.query(query, { id })
  }

  getStaff(id, query = staffId) {
    return this._graphQl.query(query, { id })
  }

  searchStaff(term, query = staffSearch) {
    return this._graphQl.query(query, {
      query: term
    })
  }

}
