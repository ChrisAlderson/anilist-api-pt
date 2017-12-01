/**
 * The staff object model.
 * @typedef {Object} StaffModel
 * @property {number} id The id of the staff member.
 * @property {string} name_first The first name of the staff member.
 * @property {string} name_last The last name of the staff member.
 * @property {string} name_japanese The japanese name of the staff member.
 * @property {string} image_url_lge The large image url of the staff member.
 * @property {string} image_url_med The medium image url of the staff member.
 * @property {string} language The language of the staff member.
 * @property {string} role The role of the staff member.
 * @property {number} dob The dob of the staff member.
 * @property {string} website The website of the staff member.
 * @property {string} info The info of the staff member.
 */

/**
 * The staff section of the module.
 * @type {Staff}
 */
module.exports = class Staff {

  /**
   * Create a new staff object.
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
   * Get a staff member with an id.
   * @param {!number} id - The id of the staff member you want information on.
   * @returns {Promise<Staff, Error>} - The promise to get infomation on a
   * staff member.
   */
  getStaff(id) {
    return this._helper.get(`staff/${id}/`)
  }

  /**
   * Get a page of staffs.
   * @param {!number} [page=1] - The page number.
   * @returns {Promise<Array<Staff>, Error>} - The promise to get a list of
   * staffs.
   */
  getPage(page = 1) {
    return this._helper.get(`staff/${page}/page`)
  }

  /**
   * Search for staffs based on a query.
   * @param {!string} query - The query to search for.
   * @return {Promise<Array<Staff>, Error>} - The promise to get a list of
   * staffs.
   */
  searchStaff(query) {
    return this._helper.get(`staff/search/${query}`)
  }

}
