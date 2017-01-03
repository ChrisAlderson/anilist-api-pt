'use strict';

const Series = require('./Series');

module.exports = class Manga extends Series {

  constructor(helper) {
    super(helper);

    Manga.series_type = 'manga';
  }

  getManga(id) {
    return super.getSeries(Manga.series_type, id);
  }

  getPage(page) {
    return super.getPage(Manga.series_type, page);
  }

  getCharacters(id) {
    return super.getCharacters(Manga.series_type, id);
  }

  browseManga({year, season, type, status, genres, genres_exclude, sort, order, full_page, page} = {}) {
    return super.browseSeries(Manga.series_type, {year, season, type, status, genres, genres_exclude, sort, order, full_page, page});
  }

  searchManga(query) {
    return super.searchSeries(Manga.series_type, query);
  }

}
