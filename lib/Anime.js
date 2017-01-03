'use strict';

const Series = require('./Series');

module.exports = class Anime extends Series {

  constructor(helper) {
    super(helper);
    this._helper = helper;

    Anime.series_type = 'anime';
  }

  getAnime(id) {
    return super.getSeries(Anime.series_type, id);
  }

  getPage(page) {
    return super.getPage(Anime.series_type, page);
  }

  getCharacters(id) {
    return super.getCharacters(Anime.series_type, id);
  }

  getAiring(id) {
    return this._helper.get(`${Anime.series_type}/${id}/airing`);
  }

  browseAnime({year, season, type, status, genres, genres_exclude, sort, order, airing_data, full_page, page} = {}) {
    return super.browseSeries(Anime.series_type, {year, season, type, status, genres, genres_exclude, sort, order, airing_data, full_page, page});
  }

  searchAnime(query) {
    return super.searchSeries(Anime.series_type, query);
  }

}
