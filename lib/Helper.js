'use strict'

const got = require('got')
const { stringify } = require('querystring')

module.exports = class Helper {

  constructor(baseUrl, opts, debug) {
    this._baseUrl = baseUrl
    this._opts = opts
    this._debug = debug
  }

  _request(method, uri, query = {}) {
    if (this._debug) {
      console.warn(`Making request to: '${uri}${stringify(query)}'`)
    }

    return got(`${this._baseUrl}/${uri}`, Object.assign({}, this._opts, {
      method,
      query
    })).then(({body}) => body)
  }

  get(uri, query) {
    return this._request('GET', uri, query)
  }

  post(uri, query) {
    return this._request('POST', uri, query)
  }

}
