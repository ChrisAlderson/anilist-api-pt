'use strict';

const request = require('request');
const querystring = require('querystring');

const defaultOptions = {
  baseUrl: 'https://anilist.co/api/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 4 * 1000,
  json: true
};

module.exports = class Helper {

  constructor(options = defaultOptions, debug = false) {
    this._debug = debug;
    this._request = request.defaults(options);
  }

  get(uri, qs, retry = true) {
    if (this._debug) console.warn(`Making request to: '${uri}', qs: ${querystring.stringify(qs)}.`);
    return new Promise((resolve, reject) => {
      this._request.get({ uri, qs }, (err, res, body) => {
        if(err && retry) {
          return resolve(this.get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found for uri: '${uri}', qs: ${querystring.stringify(qs)}, statuscode: ${res.statusCode}`));
        } else {
          return resolve(body);
        }
      });
    });
  }

  post(uri, qs, retry = true) {
    if (this._debug) console.warn(`Making request to: '${uri}', qs: ${querystring.stringify(body)}.`);
    return new Promise((resolve, reject) => {
      this._request.post({ uri, qs }, (err, res, body) => {
        if(err && retry) {
          return resolve(this.post(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found for uri: '${uri}', qs: ${qs}, statuscode: ${res.statusCode}`));
        } else {
          return resolve(body);
        }
      });
    });
  }

}
