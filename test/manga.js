'use strict';

const {	assert } = require('chai');

const AniListApi = require('../anilist-api-pt');

describe('Manga', () => {

	let anilistApi, id, page, query;
	before(() => {
		anilistApi = new AniListApi({
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET
		});

    id = 44893;
    page = 1;
    query = 'Bakemonogatari';
	});

  it('auth', done => {
    anilistApi.auth().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getManga', done => {
    anilistApi.manga.getManga(id || 44893).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getPage', done => {
    anilistApi.manga.getPage(page || 1).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getCharacters', done => {
    anilistApi.manga.getCharacters(id || 44893).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getGenres', done => {
    anilistApi.manga.getGenres().then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  })

  it('browseManga', done => {
    anilistApi.manga.browseManga({
      year: 1997,
      season: 'summer',
      type: 'manga',
      status: 'publishing',
      genres:  'Action,Adventure,Comedy,Fantasy',
      genres_exclude: 'Ecchi,Horror,Mahou%20Shoujo,Mecha,Music,Thriller,Supernatural,Sports,Slice%20of%20Life,Sci-Fi,Romance,Psychological,Mystery,Drama',
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

  it('searchManga', done => {
    anilistApi.manga.searchManga(query || 'Bakemonogatari').then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
