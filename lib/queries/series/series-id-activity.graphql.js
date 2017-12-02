module.exports = `
query ($mediaId: Int) {
  Page {
    activities (mediaId: $mediaId, type: MEDIA_LIST, sort: ID_DESC) {
      ... on ListActivity {
        id
        user {
          id
          name
        }
        media {
          id

        }
      }
    }
  }
}`
