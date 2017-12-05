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

describe('Series', () => {
  const { series } = new AnilistApi()

  const cases = [{
    title: 'should get the activty of a series',
    method: series.getSeriesActivity.bind(series),
    args: {
      id: 5081
    }
  }, {
    title: 'should get the activity of a series with a custom GraphQL query',
    method: series.getSeriesActivity.bind(series),
    args: {
      id: 5081,
      query: seriesIdActivity
    }
  }, {
    title: 'should get the airing of a series',
    method: series.getSeriesAiring.bind(series),
    args: {
      id: 5081,
      type: 'ANIME'
    }
  }, {
    title: 'should get the airing of the series with a custom GraphQL query',
    method: series.getSeriesAiring.bind(series),
    args: {
      id: 5081,
      type: 'ANIME',
      page: 1,
      query: seriesIdAiring
    }
  }, {
    title: 'should get the characters of a series',
    method: series.getSeriesCharacters.bind(series),
    args: {
      id: 5081,
      type: 'ANIME'
    }
  }, {
    title: 'should get the character of a series with a custom  GraphQL query',
    method: series.getSeriesCharacters.bind(series),
    args: {
      id: 5081,
      type: 'ANIME',
      query: seriesIdCharacters
    }
  }, {
    title: 'should get a page of series',
    method: series.getSeriesPage.bind(series),
    args: {
      id: 5081,
      type: 'ANIME'
    }
  }, {
    title: 'should get a page of series with a custom GraphQL query',
    method: series.getSeriesPage.bind(series),
    args: {
      id: 5081,
      type: 'ANIME',
      query: seriesIdPage
    }
  }, {
    title: 'should get the review of a series',
    method: series.getSeriesReviews.bind(series),
    args: {
      id: 5081
    }
  }, {
    title: 'should get the review of a series with a custom GraphQL query',
    method: series.getSeriesReviews.bind(series),
    args: {
      id: 5081,
      query: seriesIdReview
    }
  }, {
    title: 'should get a series',
    method: series.getSerie.bind(series),
    args: {
      id: 5081,
      type: 'ANIME'
    }
  }, {
    title: 'should get a series with a custom GraphQL query',
    method: series.getSerie.bind(series),
    args: {
      id: 5081,
      type: 'ANIME',
      query: seriesId
    }
  }, {
    title: 'should search for a series',
    method: series.searchSeries.bind(series),
    args: {
      term: 'Bakemonogatari'
    }
  }, {
    title: 'should search for a series with a custom GraphQL query',
    method: series.searchSeries.bind(series),
    args: {
      term: 'Bakemonogatari',
      query: seriesSearch
    }
  }, {
    title: 'should get list of series',
    method: series.listSeries.bind(series),
    args: {
      id: 5081
    }
  }, {
    title: 'should get a list of series with a custom GraphQL query ',
    method: series.listSeries.bind(series),
    args: {
      id: 5081,
      query: seriesListId
    }
  }]
  cases.map(executeTests)
})
