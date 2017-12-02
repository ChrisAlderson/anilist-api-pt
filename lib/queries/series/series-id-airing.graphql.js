module.exports = `
query ($id: Int!, $type: MediaType) {
  Media(id: $id, type: $type) {
    id
    # ...
    airingSchedule {
      nodes {
        id
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}`
