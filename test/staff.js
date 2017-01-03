'use strict';

const { assert } = require('chai');

const AniListApi = require('../anilist-api-pt');

describe('Staff', () => {

	let anilistApi, id, page, query;
	before(() => {
    anilistApi = new AniListApi({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    id = 95061;
    page = 1;
    query = 'Chiwa Saito';
	});

  it('auth', done => {
    anilistApi.auth().then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getStaff', done => {
    anilistApi.staff.getStaff(id || 95061).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('getPage', done => {
    anilistApi.staff.getPage(page || 1).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it('searchStaff', done => {
    anilistApi.staff.searchStaff(query || 'Chiwa Saito').then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
