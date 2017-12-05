// Import the necessary modules.
/* eslint-disable require-jsdoc */
const {
  Character,
  Genre,
  Review,
  Series,
  Studio,
  Staff,
  Tag,
  User
} = require('./items')
const {
  GraphQl,
  HttpTransport
} = require('./clients')

const defaultBaseUrl = 'https://graphql.anilist.co'
const defaultOpts = {
  headers: {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
  },
  json: true
}

module.exports = class AnilistQl {

  constructor({
    baseUrl = defaultBaseUrl,
    clientId,
    clientSecret,
    Transport = HttpTransport
  } = {}) {
    this._baseUrl = baseUrl
    this.transport = new Transport({
      baseUrl: this._baseUrl,
      opts: defaultOpts
    })
    this.graphQl = new GraphQl(this.transport)

    this.setApi(this.graphQl)
  }

  setApi(graphQl) {
    this.character = new Character(graphQl)
    this.genre = new Genre(graphQl)
    this.review = new Review(graphQl)
    this.series = new Series(graphQl)
    this.studio = new Studio(graphQl)
    this.staff = new Staff(graphQl)
    this.tag = new Tag(graphQl)
    this.user = new User(graphQl)
  }

  auth({
    clientId = this._clientId,
    clientSecret = this._clientSecret,
    Transport = HttpTransport
  }) {
    return this.transport.send({
      body: {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      }
    }).then(res => {
      const opts = Object.assign({}, defaultOpts, {
        headers: {
          Authorization: `${res.token_type} ${res.access_token}`
        }
      })
      this.transport = new Transport({
        baseUrl: this._baseUrl,
        opts
      })
      this.graphQl = new GraphQl(this.transport)
      this.setApi(this.graphQl)
    })
  }

}
