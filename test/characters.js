'use strict';

const { assert } = require('chai');

const AniListApi = require('../anilist-api-pt');

describe('Characters', () => {

	let anilistApi, id, page, query;
	before(() => {
    anilistApi = new AniListApi({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    id = 22037;
    page = 1;
    query = 'Hitagi Senjougahara';
	});

  it('auth', done => {
    anilistApi.auth().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getCharacters', done => {
    anilistApi.characters.getCharacters(id || 22037).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getPage', done => {
    anilistApi.characters.getPage(page || 1).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('searchCharacters', done => {
    anilistApi.characters.searchCharacters(query || 'Hitagi Senjougahara').then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
