'use strict'

// Import the necessary modules.
const AniListApi = require('../anilist-api-pt')

// Create a new instance of the module.
const anilist = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

// Some values to be used by the example.
const id = 5081
const page = 1
const query = 'Bakemonogatari'

// Chain all the anime methods.
anilist.auth().then(res => {
  console.log(res)
  return anilist.anime.getAnime(id)
}).then(res => {
  console.log(res)
  return anilist.anime.getPage(page)
}).then(res => {
  console.log(res)
  return anilist.anime.getCharacters(id)
}).then(res => {
  console.log(res)
  return anilist.anime.getAiring(id)
}).then(res => {
  console.log(res)
  return anilist.anime.browseAnime({
    year: 2009,
    season: 'summer',
    type: 'tv',
    status: 'finished_airing',
    genres: 'Mystery,Romance,Supernatural',
    genres_exclude: 'Action,Adventure,Comedy,Drama,Ecchi,Fantasy,Horror,Music,Psychological,Slice of Life,Sci-Fi,Thriller,Sports,Mecha',
    sort: 'popularity',
    order: 'desc',
    airing_data: true,
    full_page: true,
    page: page || 1
  })
}).then(res => {
  console.log(res)
  return anilist.anime.getGenres()
}).then(res => {
  console.log(res)
  return anilist.anime.searchAnime(query)
}).then(res => console.log(res))
  .catch(err => console.error(err))
