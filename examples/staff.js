'use strict'

// Import the necessary modules.
const AniListApi = require('../anilist-api-pt')

// Create a new instance of the module.
const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

// Some values to be used by the example.
const id = 95061
const page = 1
const query = 'Chiwa Saito'

// Chain all the staff methods.
anilistApi.auth().then(res => {
  console.log(res)
  return anilistApi.staff.getStaff(id)
}).then(res => {
  console.log(res)
  return anilistApi.staff.getPage(page)
}).then(res => {
  console.log(res)
  return anilistApi.staff.searchStaff(query)
}).then(res => console.log(res))
  .catch(err => console.error(err))
