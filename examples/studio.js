// Import the necessary modules.
/* eslint-disable no-console */
const AniListApi = require('..')

// Create a new instance of the module.
const anilist = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

// Some values to be used by the example.
const id = 44
const page = 1
const query = 'Shaft'

// Chain all the studio methods.
anilist.auth().then(res => {
  console.log(res)
  return anilist.studio.getStudio(id)
}).then(res => {
  console.log(res)
  return anilist.studio.getPage(page)
}).then(res => {
  console.log(res)
  return anilist.studio.searchStudio(query)
}).then(res => console.log(res))
  .catch(err => console.error(err))
