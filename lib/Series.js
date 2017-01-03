'use strict';

module.exports = class Manga {

  constructor(helper) {
    this._helper = helper;

    this._seasons = {
      winter: 'Winter',
      spring: 'Spring',
      summer: 'Summer',
      fall: 'Fall'
    };
    this._mediaTypes = {
      tv: 'Tv',
      tv_short: 'Tv Short',
      movie: 'Movie',
      special: 'Special',
      ova: 'OVA',
      ona: 'ONA',
      music: 'Music',
      manga: 'Manga',
      novel: 'Novel',
      one_shot: 'One Short',
      doujin: 'Doujin',
      manhua: 'Manhua',
      manhwa: 'Manhwa'
    };
    this._statusTypesAnime = {
      finished_airing: 'Finished Airing',
      currently_airing: 'Currently Airing',
      not_yet_aired: 'Not Yet Aired',
      cancelled: 'Cancelled'
    };
    this._statusTypesManga = {
      finished_publishing: 'Finished Publishing',
      publishing: 'Publishing',
      not_yet_published: 'Not Yet Published',
      cancelled: 'Cancelled'
    };
    this._sortFilters = {
      id: 'id',
      score: 'score',
      popularity: 'popularity',
      start_date: 'start_date',
      end_date: 'end_date'
    };
    this._orderTypes = {
      asc: 'asc',
      desc: 'desc'
    };
  }

  getSeries(series_type, id) {
    return this._helper.get(`${series_type}/${id}`);
  }

  getPage(series_type, page) {
    return this._helper.get(`${series_type}/${page}/page`);
  }

  getCharacters(series_type, id) {
    return this._helper.get(`${series_type}/${id}/characters`);
  }

  browseSeries(series_type, {year, season, type, status, genres, genres_exclude, sort = 'popularity', order = 'desc', airing_data, full_page, page} = {}) {
    if (year && isNaN(year)) return new Error(`${year} is not a valid value for year!`);
    if (season && this._seasons[season]) {
      season = this._seasons[season];
    } else {
      return new Error(`${season} is not a valid value for season!`);
    }
    if (type && (this._mediaTypes[type] || this._mediaTypes[type] === 0)) {
      type = this._mediaTypes[type];
    } else if (type && !this._mediaTypes[type]) {
      return new Error(`${type} is not a valid value for type!`);
    }

    if (series_type === 'anime') {
      if (status && this._statusTypesAnime[status]) {
        status = this._statusTypesManga[status];
      } else {
        return new Error(`${status} is not a valid value for status with series_type: '${series_type}'!`);
      }
    } else if (series_type === 'manga') {
      if (status && this._statusTypesManga[status]) {
        status = this._statusTypesManga[status];
      } else {
        return new Error(`${status} is not a valid value for status with series_type: '${series_type}'!`);
      }
      if (airing_data) return new Error(`airing_data cannot be used for series_type: '${series_type}'!`);
    }

    if (sort && !this._sortFilters[sort]) return new Error(`${sort} is not a valid value for sort!`);
    if (order && !this._orderTypes[order]) return new Error(`${order} is not a valid value for order!`);

    return this._helper.get(`browse/${series_type}`, {year, season, type, status, genres, genres_exclude, sort: `${sort}-${order}`, airing_data, full_page, page});
  }

  getGenres() {
    return this._helper.get('genre_list');
  }

  searchSeries(series_type, query) {
    return this._helper.get(`${series_type}/search/${query}`);
  }

}
