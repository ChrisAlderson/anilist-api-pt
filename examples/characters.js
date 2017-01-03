'use strict';

const AniListApi = require('../anilist-api-pt');

const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const id = 22037;
const page = 1;
const query = 'Hitagi Senjougahara';

anilistApi.auth().then(res => {
  console.log(res);
  return anilistApi.characters.getCharacters(id || 22037)
}).then(res => {
  console.log(res);
  return anilistApi.characters.getPage(page || 1);
}).then(res => {
  console.log(res);
  return anilistApi.characters.searchCharacters(query || 'Hitagi Senjougahara');
}).then(res => console.log(res))
  .catch(err => console.error(err));
