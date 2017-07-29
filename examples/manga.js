'use strict'

// Import the necessary modules.
const AniListApi = require('../anilist-api-pt')

// Create a new instance of the module.
const anilist = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

// Some values to be used by the example.
const id = 44893
const page = 1
const query = 'Bakemonogatari'

// Chain all the manga methods.
anilist.auth().then(res => {
  console.log(res)
  return anilist.manga.getManga(id)
}).then(res => {
  console.log(res)
  return anilist.manga.getPage(page)
}).then(res => {
  console.log(res)
  return anilist.manga.getCharacters(id)
}).then(res => {
  console.log(res)
  return anilist.manga.browseManga({
    year: 1997,
    season: 'summer',
    type: 'manga',
    status: 'publishing',
    genres: 'Action,Adventure,Comedy,Fantasy',
    genres_exclude: 'Ecchi,Horror,Mahou%20Shoujo,Mecha,Music,Thriller,Supernatural,Sports,Slice%20of%20Life,Sci-Fi,Romance,Psychological,Mystery,Drama',
    sort: 'popularity',
    order: 'desc',
    airing_data: true,
    full_page: true,
    page: page || 1
  })
}).then(res => {
  console.log(res)
  return anilist.manga.getGenres()
}).then(res => {
  console.log(res)
  return anilist.manga.searchManga(query)
}).then(res => console.log())
  .catch(err => console.error(err))
