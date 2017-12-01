/**
 * The series section of the module.
 * @type {Series}
 */
class Series {

  /**
   * Create a new series object.
   * @param {Helper} helper - The request helper.
   */
  constructor(helper) {
    /**
     * The request helper.
     * @type {Helper}
     */
    this._helper = helper
  }

  /**
   * Get a serie with an id.
   * @param {!string} seriesType - The type of series to get.
   * @param {!number} id - The id of the serie you want information on.
   * @returns {Promise<Object, Error>} - The promise to get infomation on a
   * serie.
   */
  getSeries(seriesType, id) {
    return this._helper.get(`${seriesType}/${id}`)
  }

  /**
   * Get a page of series.
   * @param {!string} seriesType - The type of series to get a page of.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<Object>, Error>} - The promise to get a list of
   * series.
   */
  getPage(seriesType, page) {
    return this._helper.get(`${seriesType}/${page}/page`)
  }

  /**
   * Get the characters of a series.
   * @param {!string} seriesType - The type of series to get the characters of.
   * @param {!number} id - The id of a series.
   * @returns {Promise<Array<CharacterModel>, Error>} - The promise to get a
   * list of characters.
   */
  getCharacters(seriesType, id) {
    return this._helper.get(`${seriesType}/${id}/characters`)
  }

  /**
   * Browse for series.
   * @throws {Error} - SEASON is not a valid value for season!
   * @throws {Error} - YEAR is not a valid value for year!
   * @throws {Error} - TYPE is not a valid value for type!
   * @throws {Error} - SORT is not a valid value for sort!
   * @throws {Error} - ORDER is not a valid value for order!
   * @param {!string} seriesType - The type of series to browse.
   * @param {!Object} config - The config for the browse method.
   * @param {?number} config.year - The year of the serie.
   * @param {!string} config.season - The season of the serie.
   * @param {!string} config.type - The type of serie.
   * @param {!string} config.status - The status of the serie.
   * @param {?string} config.genres - Genres to include.
   * @param {?string} config.genres_exclude - Genres to exclude.
   * @param {?string} config.sort=popularity - Sort on id, score, popularity or
   * start date.
   * @param {?boolean} config.order=desc - Order ascending or descending
   * @param {?boolean} config.full_page - Return a full page.
   * @param {?number} config.page - The page to browse.
   * @return {Promise<Array<Object>, Error>} - The promise to get a list of
   * series.
   */
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
    let err
    let s, t
    if (season && Series._seasons[season]) {
      s = Series._seasons[season]
    } else {
      err = new Error(`${season} is not a valid value for season!`)
    }
    if (year && isNaN(year)) {
      err = new Error(`${year} is not a valid value for year!`)
    }
    if (type && (Series._mediaTypes[type] || Series._mediaTypes[type] === 0)) {
      t = Series._mediaTypes[type]
    } else if (type && !Series._mediaTypes[type]) {
      err = new Error(`${type} is not a valid value for type!`)
    }
    if (sort && !Series._sortFilters[sort]) {
      err = new Error(`${sort} is not a valid value for sort!`)
    }
    if (order && !Series._orderTypes[order]) {
      err = new Error(`${order} is not a valid value for order!`)
    }

    if (err) {
      return Promise.reject(err)
    }

    return this._helper.get(`browse/${seriesType}`, {
      year,
      season: s,
      type: t,
      status,
      genres,
      genres_exclude,
      sort: `${sort}-${order}`,
      airing_data,
      full_page,
      page
    })
  }

  /**
   * Get a list of genres
   * @return {Promise<Object, Error>} - The promise to get a list of genres.
   */
  getGenres() {
    return this._helper.get('genre_list')
  }

  /**
   * Search for series based on a query.
   * @param {!string} seriesType - The type of series to search for.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<Object>, Error>} - The promise to get a list
   * of series.
   */
  searchSeries(seriesType, query) {
    return this._helper.get(`${seriesType}/search/${query}`)
  }

}

/**
    * Map for the types of seasons.
    * @type {Object}
    */
Series._seasons = {
  winter: 'Winter',
  spring: 'Spring',
  summer: 'Summer',
  fall: 'Fall'
}
/**
    * Map for the types of media.
    * @type {Object}
    */
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
/**
    * Map for the types of sorting.
    * @type {Object}
    */
Series._sortFilters = {
  id: 'id',
  score: 'score',
  popularity: 'popularity',
  start_date: 'start_date',
  end_date: 'end_date'
}
/**
     * Map for the types of ordering.
     * @type {Object}
     */
Series._orderTypes = {
  asc: 'asc',
  desc: 'desc'
}

module.exports = Series
