'use strict';

const got = require('got');
const querystring = require('querystring');

module.exports = class Helper {

  constructor({baseUrl = 'https://anilist.co/api/', debug = false} = {}) {
    this._baseUrl = baseUrl;
    this._debug = debug;
  }

  _request(method, uri, query = {}) {
    if (this._debug)
      console.warn(`Making request to: '${uri}${querystring.stringify(query)}'`);

    const opts =

    return got(`${this._baseUrl}/${uri}`, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true,
      query
    }).then(({body}) => body);
  }

  _get(uri, query) {
    return this._request('GET', uri, query);
  }

  _post(uri, query) {
    return this._request('POST', uri, query);
  }

}
