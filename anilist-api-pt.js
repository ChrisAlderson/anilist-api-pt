'use strict'

const Anime = require('./lib/Anime')
const Characters = require('./lib/Characters')
const Helper = require('./lib/Helper')
const Manga = require('./lib/Manga')
const Staff = require('./lib/Staff')
const Studio = require('./lib/Studio')

module.exports = class AniListApi {
    
  constructor({clientId = null, clientSecret = null, debug = false} = {}) {
    if (!clientId || !clientSecret) {
      throw new Error(`No clientId or clientSecret found.`)
    }

    AniListApi._clientId = clientId
    AniListApi._clientSecret = clientSecret
    AniListApi._debug = debug
    AniListApi._helper = new Helper('https://anilist.co/api', {
      headers: {
        'Context-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    }, AniListApi._debug)

    this.anime = new Anime(AniListApi._helper)
    this.characters = new Characters(AniListApi._helper)
    this.manga = new Manga(AniListApi._helper)
    this.staff = new Staff(AniListApi._helper)
    this.studio = new Studio(AniListApi._helper)
  }

  auth(clientId = AniListApi._clientId, clientSecret = AniListApi._clientSecret) {
    return AniListApi._helper.post('auth/access_token', {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    }).then(res => {
      const helper = new Helper('https://anilist.co/api', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `${res.token_type} ${res.access_token}`
        },
        json: true
      }, AniListApi._debug)

      this.anime = new Anime(helper)
      this.characters = new Characters(helper)
      this.manga = new Manga(helper)
      this.staff = new Staff(helper)
      this.studio = new Studio(helper)

      return this
    })
  }

}
