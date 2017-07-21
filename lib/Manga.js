'use strict'

const Series = require('./Series')

module.exports = class Manga extends Series {
  constructor (helper) {
    super(helper)

    Manga._statusTypesManga = {
      finished_publishing: 'Finished Publishing',
      publishing: 'Publishing',
      not_yet_published: 'Not Yet Published',
      cancelled: 'Cancelled'
    }
    Manga.seriesType = 'manga'
  }

  getManga (id) {
    return super.getSeries(Manga.seriesType, id)
  }

  getPage (page = 1) {
    return super.getPage(Manga.seriesType, page)
  }

  getCharacters (id) {
    return super.getCharacters(Manga.seriesType, id)
  }

  browseManga ({
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

  searchManga (query) {
    return super.searchSeries(Manga.seriesType, query)
  }
}
