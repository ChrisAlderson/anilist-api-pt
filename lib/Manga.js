'use strict'

/**
 * The manga object model.
 * @typedef {Object} MangaModel
 * @property {!number} id The id of the manga.
 * @property {!string} series_type The series_type of the manga.
 * @property {!string} title_romaji The title_romaji of the manga.
 * @property {!string} title_english The title_english of the manga.
 * @property {!string} title_japanese The title_japanese of the manga.
 * @property {!string} type The type of the manga.
 * @property {?string} start_date The start_date of the manga.
 * @property {?string} end_date The end_date of the manga.
 * @property {?number} start_date_fuzzy The start_date_fuzzy of the manga.
 * @property {?number} end_date_fuzzy The end_date_fuzzy of the manga.
 * @property {?number} season The season of the manga.
 * @property {?string} description The description of the manga.
 * @property {!Array<string>} synonyms The synonyms of the manga.
 * @property {!Array<string>} genres The genres of the manga.
 * @property {!boolean} adult The adult of the manga.
 * @property {!number}  average_score The average_score of the manga.
 * @property {!number} popularity The popularity of the manga.
 * @property {!boolean} favourite The favourite of the manga.
 * @property {!string} image_url_sml The image_url_sml of the manga.
 * @property {!string} image_url_med The image_url_med of the manga.
 * @property {!string} image_url_lge The image_url_lge of the manga.
 * @property {?string} image_url_banner The image_url_banner of the manga.
 * @property {!number} updated_at The updated_at of the manga.
 * @property {!number} score_distribution The score_distribution of the manga.
 * @property {!number} list_stats The list_stats of the manga.
 * @property {!number} total_chapters The total_chapters of the manga.
 * @property {!number} total_volumes The total_volumes of the manga.
 * @property {?string} publishing_status The publishing_status of the manga.
 */

// Import the necessary modules.
const Series = require('./Series')

/**
 * The manga section of the module.
 * @extends {Series}
 * @type {Manga}
 */
module.exports = class Manga extends Series {

  /**
   * Create a new manga object.
   * @param {Helper} helper - The request helper.
   */
  constructor(helper) {
    super(helper)

    /**
     * The types of statuses for mangas.
     * @type {Object}
     */
    Manga._statusTypesManga = {
      finished_publishing: 'Finished Publishing',
      publishing: 'Publishing',
      not_yet_published: 'Not Yet Published',
      cancelled: 'Cancelled'
    }

    /**
     * The type of series to get.
     * @type {String}
     */
    Manga.seriesType = 'manga'
  }

  /**
   * Get a manga with an id.
   * @param {!number} id - The id of the manga you want information on.
   * @returns {Promise<MangaModel, Error>} - The promise to get infomation on a
   * manga.
   */
  getManga(id) {
    return super.getSeries(Manga.seriesType, id)
  }

  /**
   * Get a page of mangas.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<MangaModel>, Error>} - The promise to get a list
   * of mangas.
   */
  getPage(page = 1) {
    return super.getPage(Manga.seriesType, page)
  }

  /**
   * Get the characters of a manga.
   * @param {!number} id - The id of a manga.
   * @returns {Promise<Array<CharacterModel>, Error>} - The promise to get a
   * list of characters.
   */
  getCharacters(id) {
    return super.getCharacters(Manga.seriesType, id)
  }

  /**
   * Browse for mangas.
   * @throws {Error} - SERIESTYPE is not a valid value for status with
   * seriesType: 'manga'!
   * @param {!Object} config - The config for the browse method.
   * @param {?number} config.year - The year of the manga.
   * @param {!string} config.season - The season of the manga.
   * @param {!string} config.type - The type of manga.
   * @param {!string} config.status - The status of the manga.
   * @param {?string} config.genres - Genres to include.
   * @param {?string} config.genres_exclude - Genres to exclude.
   * @param {?string} config.sort - Sort on id, score, popularity or start
   * date.
   * @param {?boolean} config.order - Order ascending or descending
   * @param {?boolean} config.full_page - Return a full page.
   * @param {?number} config.page - The page to browse.
   * @return {Promise<Array<MangaModel>, Error>} - The promise to get a list of
   * mangas.
   */
  browseManga({
    year,
    season,
    type,
    status,
    genres,
    genres_exclude,
    sort,
    order,
    full_page,
    page
  }) {
    if (status && Manga._statusTypesManga[status]) {
      status = Manga._statusTypesManga[status]
    } else {
      throw new Error(`${status} is not a valid value for status with seriesType: '${Manga.seriesType}'!`)
    }

    return super.browseSeries(Manga.seriesType, {
      year,
      season,
      type,
      status,
      genres,
      genres_exclude,
      sort,
      order,
      full_page,
      page
    })
  }

  /**
   * Search for mangas based on a query.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<MangaModel>, Error>} - The promise to get a list of
   * mangas.
   */
  searchManga(query) {
    return super.searchSeries(Manga.seriesType, query)
  }

}
