'use strict';

module.exports = class Staff {

  constructor(helper) {
    this._helper = helper;
  }

  getStaff(id) {
    return this._helper.get(`staff/${id}/`);
  }

  getPage(page) {
    return this._helper.get(`staff/${page}/page`);
  }

  searchStaff(query) {
    return this._helper.get(`staff/search/${query}`);
  }

}
