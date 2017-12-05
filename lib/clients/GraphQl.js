// Import the necessary modules.
/* eslint-disable require-jsdoc */
const debug = require('debug')

const { name } = require('../../package')

module.exports = class GraphQl {

  constructor(transport) {
    this._transport = transport
    this._debug = debug(`${name}:GraphQl`)
  }

  query(query, variables) {
    this._debug('Querying: query: %s, varaibles: %O', query, variables)
    return this._transport.send({
      body: {
        query,
        variables
      }
    })
  }

  mutate(query, variables) {
    return this.query(query, variables)
  }

}
