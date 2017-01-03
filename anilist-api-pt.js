'use strict';

const Anime = require('./lib/Anime');
const Characters = require('./lib/Characters');
const Helper = require('./lib/Helper');
const Manga = require('./lib/Manga');
const Staff = require('./lib/Staff');
const Studio = require('./lib/Studio');

module.exports = class AniListAPI {

  constructor({client_id = null, client_secret = null, debug = false} = {}) {
    if (!client_id || !client_secret) throw new Error(`No client_id or client_secret found.`);

    AniListAPI._client_id = client_id;
    AniListAPI._client_secret = client_secret;
    AniListAPI._helper = new Helper();

    this.anime = new Anime(AniListAPI._helper);
    this.characters = new Characters(AniListAPI._helper);
    this.manga = new Manga(AniListAPI._helper);
    this.staff = new Staff(AniListAPI._helper);
    this.studio = new Studio(AniListAPI._helper);
  }

  auth(client_id = AniListAPI._client_id, client_secret = AniListAPI._client_secret) {
    return AniListAPI._helper.post('auth/access_token', {
      grant_type: 'client_credentials',
      client_id,
      client_secret
    }).then(res => {
      const helper = new Helper({
        baseUrl: 'https://anilist.co/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `${res.token_type} ${res.access_token}`
        },
        timeout: 4 * 1000,
        json: true
      });

      this.anime = new Anime(helper);
      this.characters = new Characters(helper);
      this.manga = new Manga(helper);
      this.staff = new Staff(helper);
      this.studio = new Studio(helper);

      return this;
    });
  }

}
