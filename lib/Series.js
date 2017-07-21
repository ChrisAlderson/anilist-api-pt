'use strict'

module.exports = class Series {

  constructor(helper) {
    this._helper = helper

    Series._seasons = {
      winter: 'Winter',
      spring: 'Spring',
      summer: 'Summer',
      fall: 'Fall'
    }
    Series._mediaTypes = {
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
    }
    Series._sortFilters = {
      id: 'id',
      score: 'score',
      popularity: 'popularity',
      start_date: 'start_date',
      end_date: 'end_date'
    }
    Series._orderTypes = {
      asc: 'asc',
      desc: 'desc'
    }
  }

  getSeries(seriesType, id) {
    return this._helper.get(`${seriesType}/${id}`)
  }

  getPage(seriesType, page) {
    return this._helper.get(`${seriesType}/${page}/page`)
  }

  getCharacters(seriesType, id) {
    return this._helper.get(`${seriesType}/${id}/characters`)
  }

  browseSeries(seriesType, {
    year,
    season,
    type,
    status,
    genres,
    genres_exclude,
    sort = 'popularity',
    order = 'desc',
    airing_data,
    full_page,
    page
  }) {
    if (season && Series._seasons[season]) {
      season = Series._seasons[season]
    } else {
      throw new Error(`${season} is not a valid value for season!`)
    }

    if (year && isNaN(year)) {
      throw new Error(`${year} is not a valid value for year!`)
    }

    if (type && (Series._mediaTypes[type] || Series._mediaTypes[type] === 0)) {
      type = Series._mediaTypes[type]
    } else if (type && !Series._mediaTypes[type]) {
      throw new Error(`${type} is not a valid value for type!`)
    }

    if (sort && !Series._sortFilters[sort]) {
      throw new Error(`${sort} is not a valid value for sort!`)
    }
    if (order && !Series._orderTypes[order]) {
      throw new Error(`${order} is not a valid value for order!`)
    }


    return this._helper.get(`browse/${seriesType}`, {
      year,
      season,
      type,
      status,
      genres,
      genres_exclude,
      sort: `${sort}-${order}`,
      airing_data,
      full_page,
      page
    })
  }

  getGenres() {
    return this._helper.get('genre_list')
  }

  searchSeries(seriesType, query) {
    return this._helper.get(`${seriesType}/search/${query}`)
  }

}
