'use strict';

module.exports = class Studio {

  constructor(helper) {
    this._helper = helper;
  }

  getStudio(id) {
    return this._helper.get(`studio/${id}/`);
  }

  getPage(page) {
    return this._helper.get(`studio/${page}/page`);
  }

  searchStudio(query) {
    return this._helper.get(`studio/search/${query}`);
  }

}
