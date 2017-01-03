'use strict';

const AniListApi = require('../anilist-api-pt');

const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const id = 5081;
const page = 1;
const query = 'Bakemonogatari';

anilistApi.auth().then(res => {
  console.log(res);
  return anilistApi.anime.getAnime(id || 5081)
}).then(res => {
  console.log(res);
  return anilistApi.anime.getPage(page || 1);
}).then(res => {
  console.log(res);
  return anilistApi.anime.getCharacters(id || 5081);
}).then(res => {
  console.log(res);
  return anilistApi.anime.getAiring(id || 5081)
}).then(res => {
  console.log(res);
  return anilistApi.anime.browseAnime({
    year: 2009,
    season: 'summer',
    type: 'tv',
    status: 'finished_airing',
    genres:  'Mystery,Romance,Supernatural',
    genres_exclude: 'Action,Adventure,Comedy,Drama,Ecchi,Fantasy,Horror,Music,Psychological,Slice of Life,Sci-Fi,Thriller,Sports,Mecha',
    sort: 'popularity',
    order: 'desc',
    airing_data: true,
    full_page: true,
    page: page || 1
  });
}).then(res => {
  console.log(res);
  return anilistApi.anime.getGenres();
}).then(res => {
  console.log(res);
  return anilistApi.anime.searchAnime(query || 'Bakemonogatari');
}).then(res => console.log(res))
  .catch(err => console.error(err));
