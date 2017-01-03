'use strict';

module.exports = class Characters {

  constructor(helper) {
    this._helper = helper;
  }

  getCharacters(id) {
    return this._helper.get(`character/${id}/`);
  }

  getPage(id) {
    return this._helper.get(`character/${id}/page`);
  }

  searchCharacters(query) {
    return this._helper.get(`character/search/${query}`);
  }

}
