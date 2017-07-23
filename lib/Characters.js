'use strict'

/**
 * The character object model.
 * @typedef {Object} CharacterModel
 * @property {!number} id The id of the character.
 * @property {!string} name_first The first name of the character.
 * @property {!string} name_last The last name of the character.
 * @property {!string} name_japanese The japanese name of the character.
 * @property {!string} image_url_lge The large image url of the character.
 * @property {!string} image_url_med The medium image url of the character.
 * @property {!string} role The role of the character.
 * @property {?string} name_alt The alternative name of the character.
 * @property {?string} info The info of the character.
 */

/**
 * The characters section of the module.
 * @type {Characters}
 */
module.exports = class Characters {

  /**
   * Create a new characters object.
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
   * Get a character with an id.
   * @param {!number} id - The id of the character you want information on.
   * @returns {Promise<CharacterModel, Error>} - The promise to get infomation
   * on a character.
   */
  getCharacter(id) {
    return this._helper.get(`character/${id}`)
  }

  /**
   * Get a page of characters.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<CharacterModel>, Error>} - The promise to get a
   * list of characters.
   */
  getPage(page = 1) {
    return this._helper.get(`character/${page}/page`)
  }

  /**
   * Search for characters based on a query.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<CharacterModel>, Error>} - The promise to get a
   * list of characters.
   */
  searchCharacters(query) {
    return this._helper.get(`character/search/${query}`)
  }

}
