'use strict';

const AniListApi = require('../anilist-api-pt');

const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const id = 44;
const page = 1;
const query = 'Shaft';

anilistApi.auth().then(res => {
  console.log(res);
  return anilistApi.studio.getStudio(id || 44);
}).then(res => {
  console.log(res);
  return anilistApi.studio.getPage(page || 1)
}).then(res => {
  console.log(res);
  return anilistApi.studio.searchStudio(query || 'Shaft')
}).then(res => console.log(res))
  .catch(err => console.error(err));
