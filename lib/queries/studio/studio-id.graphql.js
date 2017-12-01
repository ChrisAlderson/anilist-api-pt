module.exports = `
query ($id: Int!) {
  Studio(id: $id) {
    id
    name
    isFavourite
  }
}`
