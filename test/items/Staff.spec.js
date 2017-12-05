const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const {
  staffIdPage,
  staffId,
  staffSearch
} = require('../../lib/queries')

describe('Staff', () => {
  const { staff } = new AnilistApi()

  const cases = [{
    title: 'should get a staff page',
    method: staff.getStaffPage.bind(staff),
    args: {
      id: 95061
    }
  }, {
    title: 'should get a staff page with a custom graphql query',
    method: staff.getStaffPage.bind(staff),
    args: {
      id: 95061,
      query: staffIdPage
    }
  }, {
    title: 'should get staff a by id',
    method: staff.getStaff.bind(staff),
    args: {
      id: 95061
    }
  }, {
    title: 'should get staff a by id with a custom graphql query',
    method: staff.getStaff.bind(staff),
    args: {
      id: 95061,
      query: staffId
    }
  }, {
    title: 'should search for a staff',
    method: staff.searchStaff.bind(staff),
    args: {
      term: 'Chiwa Saito'
    }
  }, {
    title: 'should search for a staff with a custom graphql query',
    method: staff.searchStaff.bind(staff),
    args: {
      term: 'Chiwa Saito',
      query: staffSearch
    }
  }]
  cases.map(executeTests)
})
