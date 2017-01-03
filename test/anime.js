'use strict';

const {	assert } = require('chai');

const AniListApi = require('../anilist-api-pt');

describe('Anime', () => {

	let anilistApi, id, page, query;
	before(() => {
		anilistApi = new AniListApi({
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET
		});

		id = 5081;
		page = 1;
		query = 'Bakemonogatari';
	});

  it('auth', done => {
    anilistApi.auth().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getAnime', done => {
    anilistApi.anime.getAnime(id || 5081).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getPage', done => {
    anilistApi.anime.getPage(page || 1).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getCharacters', done => {
    anilistApi.anime.getCharacters(id || 5081).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getAiring', done => {
    anilistApi.anime.getAiring(id || 5081).then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  it('getGenres', done => {
    anilistApi.anime.getGenres().then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  })

  it('browseAnime', done => {
    anilistApi.anime.browseAnime({
      year: 2009,
      season: 'summer',
      type: 'tv',
      status: 'finished_airing',
      genres: 'Mystery,Romance,Supernatural',
      genres_exclude: 'Action,Adventure,Comedy,Drama,Ecchi,Fantasy,Horror,Music,Psychological,Slice of Life,Sci-Fi,Thriller,Sports,Mecha',
      sort: 'popularity',
      order: 'desc',
      airing_data: true,
      full_page: true,
      page: page || 1
    }).then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  it('searchAnime', done => {
    anilistApi.anime.searchAnime(query || 'Bakemonogatari').then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
