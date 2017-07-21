'use strict'

const Series = require('./Series')

module.exports = class Anime extends Series {
    
  constructor (helper) {
    super(helper)

    Anime._statusTypesAnime = {
      finished_airing: 'finished airing',
      currently_airing: 'Currently Airing',
      not_yet_aired: 'Not Yet Aired',
      cancelled: 'Cancelled'
    }
    Anime.seriesType = 'anime'
  }

  getAnime(id) {
    return super.getSeries(Anime.seriesType, id)
  }

  getPage(page = 1) {
    return super.getPage(Anime.seriesType, page)
  }

  getCharacters(id) {
    return super.getCharacters(Anime.seriesType, id)
  }

  getAiring(id) {
    return this._helper.get(`${Anime.seriesType}/${id}/airing`)
  }

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

  searchAnime (query) {
    return super.searchSeries(Anime.seriesType, query)
  }

}
