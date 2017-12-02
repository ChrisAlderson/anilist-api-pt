/* eslint-disable no-unused-vars */
const executeTests = require('./executeTests')
const AnilistApi = require('../../lib')
const {
  seriesIdActivity,
  seriesIdAiring,
  seriesIdCharacters,
  seriesIdPage,
  seriesIdReview,
  seriesId,
  seriesSearch,
  seriesListId
} = require('../../lib/queries')

describe.skip('Series', () => {
  const { series } = new AnilistApi()

  const cases = [{
    title: 'should get the activty of a series',
    method: series.getSerieActivity(5081)
  }, {
    title: 'should get the activity of a series with a custom GraphQL query',
    method: series.getSerieActivity(5081, seriesIdActivity)
  }, {
    title: 'should get the airing of a series',
    method: series.getSerieAiring(5081)
  }, {
    title: 'should get the airing of the series with a custom GraphQL query',
    method: series.getSerieAiring(5081, seriesIdAiring)
  }, {
    title: 'should get the characters of a series',
    method: series.getSerieCharaccters(5081)
  }, {
    title: 'should get the character of a series with a custom  GraphQL query',
    method: series.getSerieCharaccters(5081, seriesIdCharacters)
  }, {
    title: 'should get a page of series',
    method: series.getSeriePage(5081)
  }, {
    title: 'should get a page of series with a custom GraphQL query',
    method: series.getSeriePage(5081, seriesIdPage)
  }, {
    title: 'should get the review of a series',
    method: series.getSerieReviews(5081)
  }, {
    title: 'should get the review of a series with a custom GraphQL query',
    method: series.getSerieReviews(5081, seriesIdReview)
  }, {
    title: 'should get a series',
    method: series.getSerie(5081)
  }, {
    title: 'should get a series with a custom GraphQL query',
    method: series.getSerie(5081, seriesId)
  }, {
    title: 'should search for a series',
    method: series.searchSeries('Bakemonogatari')
  }, {
    title: 'should search for a series with a custom GraphQL query',
    method: series.searchSeries('Bakemonogatari', seriesSearch)
  }, {
    title: 'should get list of series',
    method: series.listSeries(5081)
  }, {
    title: 'should get a list of series with a custom GraphQL query ',
    method: series.listSeries(5081, seriesListId)
  }]
  cases.map(executeTests)
})
