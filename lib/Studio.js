'use strict'

/**
 * The studio object model.
 * @typedef {Object} StudioModel
 * @property {number} id The id of the studio.
 * @property {string} studio_name The studio_name of the studio.
 * @property {string} studio_wiki The studio_wiki of the studio.
 * @property {string} main_studio The main_studio of the studio.
 */

/**
 * The studio section of the module.
 * @type {Studio}
 */
module.exports = class Studio {

  /**
   * Create a new studio object.
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
   * Get a studio with an id.
   * @param {!number} id - The id of the studio you want information on.
   * @returns {Promise<StudioModel, Error>} - The promise to get infomation on
   * a studio.
   */
  getStudio(id) {
    return this._helper.get(`studio/${id}/`)
  }

  /**
   * Get a page of studios.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<StudioModel>, Error>} - The promise to get a list
   * of studios.
   */
  getPage(page = 1) {
    return this._helper.get(`studio/${page}/page`)
  }

  /**
   * Search for studios based on a query.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<StudioModel>, Error>} - The promise to get a list
   * of studios.
   */
  searchStudio(query) {
    return this._helper.get(`studio/search/${query}`)
  }

}
