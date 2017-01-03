'use strict';

const AniListApi = require('../anilist-api-pt');

const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const id = 95061;
const page = 1;
const query = 'Chiwa Saito';

anilistApi.auth().then(res => {
  console.log(res);
  return anilistApi.staff.getStaff(id || 95061)
}).then(res => {
  console.log(res);
  return anilistApi.staff.getPage(page || 1);
}).then(res => {
  console.log(res);
  return anilistApi.staff.searchStaff(query || 'Chiwa Saito');
}).then(res => console.log(res))
  .catch(err => console.error(err));
