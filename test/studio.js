'use strict';

const { assert } = require('chai');

const AniListApi = require('../anilist-api-pt');

describe('Studio', () => {

	let anilistApi, id, page, query;
	before(() => {
    anilistApi = new AniListApi({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    id = 44;
    page = 1;
    query = 'Shaft';
	});

  it('auth', done => {
    anilistApi.auth().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getStudio', done => {
    anilistApi.studio.getStudio(id || 44).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getPage', done => {
    anilistApi.studio.getPage(page || 1).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('searchStudio', done => {
    anilistApi.studio.searchStudio(query || 'Shaft').then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
