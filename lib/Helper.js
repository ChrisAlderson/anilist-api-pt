'use strict'

// Import the necessary modules.
const got = require('got')
const { stringify } = require('querystring')

/**
 * The helper section of the module.
 * @type {Anime}
 */
module.exports = class Helper {

  /**
   * Create a new helper object.
   * @param {!string} baseUrl - The base url of anilist.
   * @param {!Object} opts - The default request options.
   * @param {?boolean} [debug] - Show extra output.
   */
  constructor(baseUrl, opts, debug) {
    /**
     * The base url of anilist.
     * @type {string}
     */
    this._baseUrl = baseUrl

    /**
     * The default request options.
     * @type {Object}
     */
    this._opts = opts

    /**
     * Show extra output.
     * @type {boolean}
     */
    this._debug = debug
  }

  /**
   * [_request description]
   * @param {!string} method - The method of the request.
   * @param {!string} endpoint - The endpoint of the request.
   * @param {?Object} query - The query to send with the request.
   * @returns {Promise<Object, Error>} - The promise to send a request.
   */
  _request(method, endpoint, query = {}) {
    const uri = `${this._baseUrl}/${endpoint}`

    if (this._debug) {
      console.warn(`Making request to: '${uri}${stringify(query)}'`)
    }

    return got(uri, Object.assign({}, this._opts, {
      method,
      query
    })).then(({body}) => body)
  }

  /**
   * Send a GET request to the anilist API.
   * @param {!string} endpoint - The endpoint of the GET request.
   * @param {?Object} query - The query to send with the GET request.
   * @returns {Promise<Object, Error>} - The promise to send a GET request.
   */
  get(endpoint, query) {
    return this._request('GET', endpoint, query)
  }

  /**
   * Send a POST request to the anilist API.
   * @param {!string} endpoint - The endpoint of the POST request.
   * @param {?Object} query - The query to send with the POST request.
   * @returns {Promise<Object, Error>} - The promise to send a POST request.
   */
  post(endpoint, query) {
    return this._request('POST', endpoint, query)
  }

}
