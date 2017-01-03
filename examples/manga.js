'use strict';

const AniListApi = require('../anilist-api-pt');

const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const id = 44893;
const page = 1;
const query = 'Bakemonogatari';

anilistApi.auth().then(res => {
  console.log(res);
  return anilistApi.manga.getManga(id || 44893);
}).then(res => {
  console.log(res);
  return anilistApi.manga.getPage(page || 1);
}).then(res => {
  console.log(res);
  return anilistApi.manga.getCharacters(id || 44893);
}).then(res => {
  console.log(res);
  return anilistApi.manga.browseManga({
    year: 1997,
    season: 'summer',
    type: 'manga',
    status: 'publishing',
    genres:  'Action,Adventure,Comedy,Fantasy',
    genres_exclude: 'Ecchi,Horror,Mahou%20Shoujo,Mecha,Music,Thriller,Supernatural,Sports,Slice%20of%20Life,Sci-Fi,Romance,Psychological,Mystery,Drama',
    sort: 'popularity',
    order: 'desc',
    airing_data: true,
    full_page: true,
    page: page || 1
  });
}).then(res => {
  console.log(res);
  return anilistApi.manga.getGenres();
}).then(res => {
  console.log(res);
  return anilistApi.manga.searchManga(query || 'Bakemonogatari');
}).then(res => console.log(res))
  .catch(err => console.error(err));
