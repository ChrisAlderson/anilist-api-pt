'use strict'

// Import the necessary modules.
const AniListApi = require('../anilist-api-pt')

// Create a new instance of the module.
const anilistApi = new AniListApi({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
})

// Some values to be used by the example.
const id = 22037
const page = 1
const query = 'Hitagi Senjougahara'

// Chain all the character methods.
anilistApi.auth().then(res => {
  console.log(res)
  return anilistApi.characters.getCharacters(id)
}).then(res => {
  console.log(res)
  return anilistApi.characters.getPage(page)
}).then(res => {
  console.log(res)
  return anilistApi.characters.searchCharacters(query)
}).then(res => console.log(res))
  .catch(err => console.error(err))
