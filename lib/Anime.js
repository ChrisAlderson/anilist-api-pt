'use strict'

/**
 * The anime object model.
 * @typedef {Object} AnimeModel
 * @property {!number} id The id of the anime.
 * @property {!string} series_type The series_type of the anime.
 * @property {!string} title_romaji The title_romaji of the anime.
 * @property {!string} title_english The title_english of the anime.
 * @property {!string} title_japanese The title_japanese of the anime.
 * @property {!string} type The type of the anime.
 * @property {?string} start_date The start_date of the anime.
 * @property {?string} end_date The end_date of the anime.
 * @property {?number} start_date_fuzzy The start_date_fuzzy of the anime.
 * @property {?number} end_date_fuzzy The end_date_fuzzy of the anime.
 * @property {?number} season The season of the anime.
 * @property {?string} description The description of the anime.
 * @property {!Array<string>} synonyms The synonyms of the anime.
 * @property {!Array<string>} genres The genres of the anime.
 * @property {!boolean} adult The adult of the anime.
 * @property {!number}  average_score The average_score of the anime.
 * @property {!number} popularity The popularity of the anime.
 * @property {!boolean} favourite The favourite of the anime.
 * @property {!string} image_url_sml The image_url_sml of the anime.
 * @property {!string} image_url_med The image_url_med of the anime.
 * @property {!string} image_url_lge The image_url_lge of the anime.
 * @property {?string} image_url_banner The image_url_banner of the anime.
 * @property {!number} updated_at The updated_at of the anime.
 * @property {!number} score_distribution The score_distribution of the anime.
 * @property {!number} list_stats The list_stats of the anime.
 * @property {number} total_episodes The total_episodes of the anime.
 * @property {?number} duration The duration of the anime.
 * @property {?string} airing_status The airing_status of the anime.
 * @property {?string} youtube_id The youtube_id of the anime.
 * @property {?string} hashtag The hashtag of the anime.
 * @property {?string} source The source of the anime.
 * @property {!Array<string>} airing_stats The airing_stats of the anime.
 */

// Import the necessary modules.
const Series = require('./Series')

/**
 * The anime section of the module.
 * @extends {Series}
 * @type {Anime}
 */
module.exports = class Anime extends Series {

  /**
   * Create a new anime object.
   * @param {Helper} helper - The request helper.
   */
  constructor(helper) {
    super(helper)

    /**
     * The types of statuses for animes.
     * @type {Object}
     */
    Anime._statusTypesAnime = {
      finished_airing: 'finished airing',
      currently_airing: 'Currently Airing',
      not_yet_aired: 'Not Yet Aired',
      cancelled: 'Cancelled'
    }

    /**
     * The type of series to get.
     * @type {String}
     */
    Anime.seriesType = 'anime'
  }

  /**
   * Get an anime with an id.
   * @param {!number} id - The id of the anime you want information on.
   * @returns {Promise<AnimeModel, Error>} - The promise to get infomation on
   * an anime.
   */
  getAnime(id) {
    return super.getSeries(Anime.seriesType, id)
  }

  /**
   * Get a page of animes.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<AnimeModel>, Error>} - The promise to get a list
   * of animes.
   */
  getPage(page = 1) {
    return super.getPage(Anime.seriesType, page)
  }

  /**
   * Get the characters of an anime.
   * @param {!number} id - The id of an anime.
   * @returns {Promise<Array<CharacterModel>, Error>} - The promise to get a
   * list of characters.
   */
  getCharacters(id) {
    return super.getCharacters(Anime.seriesType, id)
  }

  /**
   * Get the airing status of an anime.
   * @param {!number} id - The id of an anime.
   * @return {Promise<AnimeModel, Error>} - The promise to get the airing stats
   * of an anime.
   */
  getAiring(id) {
    return this._helper.get(`${Anime.seriesType}/${id}/airing`)
  }

  /**
   * Browse for animes.
   * @throws {Error} - SERIESTYPE is not a valid value for status with
   * seriesType: 'anime'!
   * @param {!Object} config - The config for the browse method.
   * @param {?number} config.year - The year of the anime.
   * @param {!string} config.season - The season of the anime.
   * @param {!string} config.type - The type of anime.
   * @param {!string} config.status - The status of the anime.
   * @param {?string} config.genres - Genres to include.
   * @param {?string} config.genres_exclude - Genres to exclude.
   * @param {?string} config.sort - Sort on id, score, popularity or start
   * date.
   * @param {?boolean} config.order - Order ascending or descending
   * @param {?boolean} config.full_page - Return a full page.
   * @param {?number} config.page - The page to browse.
   * @return {Promise<Array<AnimeModel>, Error>} - The promise to get a list of
   * animes.
   */
  browseAnime({
    year,
    season,
    type,
    status,
    genres,
    genres_exclude,
    sort,
    order,
    airing_data,
    full_page,
    page
  }) {
    if (status && Anime._statusTypesAnime[status]) {
      status = Anime._statusTypesAnime[status]
    } else {
      throw new Error(`${status} is not a valid value for status with seriesType: '${Anime.seriesType}'!`)
    }

    return super.browseSeries(Anime.seriesType, {
      year,
      season,
      type,
      status,
      genres,
      genres_exclude,
      sort,
      order,
      airing_data,
      full_page,
      page
    })
  }

  /**
   * Search for animes based on a query.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<AnimeModel>, Error>} - The promise to get a list of
   * animes.
   */
  searchAnime(query) {
    return super.searchSeries(Anime.seriesType, query)
  }

}
