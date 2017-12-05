// Import the necessary modules.
/* eslint-disable require-jsdoc */
const debug = require('debug')
const got = require('got')

const { name } = require('../../package')

module.exports = class Transport {

  constructor({baseUrl = 'https://graphql.anilist.co', opts} = {}) {
    this._baseUrl = baseUrl
    this._opts = opts
    this._debug = debug(`${name}:Http`)
  }

  _request(method, opts) {
    this._debug('%O', opts)
    return got(this._baseUrl, Object.assign({}, this._opts, {
      json: true
    }, opts)).then(({ body }) => body)
  }

  send(opts) {
    return this._request('POST', opts)
  }

}
