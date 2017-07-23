'use strict'

// Import the necessary modules.
const Anime = require('./lib/Anime')
const Characters = require('./lib/Characters')
const Helper = require('./lib/Helper')
const Manga = require('./lib/Manga')
const Staff = require('./lib/Staff')
const Studio = require('./lib/Studio')

/**
 * An AniList API wrapper for NodeJS.
 * @type {AniListApi}
 */
module.exports = class AniListApi {

  /**
   * Create a instance of the module.
   * @param {!Object} config={} - The configuration object of the module.
   * @param {!string} config.clientId - Your client id.
   * @param {!string} config.clientSecret - Your client secret.
   * @param {?boolean} [config.debug=false] - Show extra output.
   */
  constructor({clientId, clientSecret, debug = false} = {}) {
    if (!clientId || !clientSecret) {
      throw new Error(`No clientId or clientSecret found.`)
    }

    /**
     * Your client id.
     * @type {string}
     */
    AniListApi._clientId = clientId

    /**
     * Your client secret.
     * @type {string}
     */
    AniListApi._clientSecret = clientSecret

    /**
     * Show extra output.
     * @type {boolean}
     */
    AniListApi._debug = debug

    /**
     * The default helper, without authentication.
     * @type {Helper}
     */
    AniListApi._helper = new Helper('https://anilist.co/api', {
      headers: {
        'Context-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    }, AniListApi._debug)

    /**
     * The anime section of th module.
     * @type {Anime}
     */
    this.anime = new Anime(AniListApi._helper)

    /**
     * The characters section of th module.
     * @type {Characters}
     */
    this.characters = new Characters(AniListApi._helper)

    /**
     * The manga section of th module.
     * @type {Manga}
     */
    this.manga = new Manga(AniListApi._helper)

    /**
     * The staff section of th module.
     * @type {Staff}
     */
    this.staff = new Staff(AniListApi._helper)

    /**
     * The studio section of th module.
     * @type {Studio}
     */
    this.studio = new Studio(AniListApi._helper)
  }

  /**
   * Authenitcate the module to use the different sections.
   * @param {!string} [clientId=AniListApi._clientId] - Your client id.
   * @param {!string} [clientSecret=AniListApi._clientSecret] - Your client
   * secret.
   * @return {AniListApi} - New version of the module with the authentication
   * enabled.
   */
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
