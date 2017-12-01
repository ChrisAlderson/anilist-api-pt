# anilist-api-pt

[![Build Status](https://travis-ci.org/ChrisAlderson/anilist-api-pt.svg?branch=master)](https://travis-ci.org/ChrisAlderson/anilist-api-pt)
[![Coverage Status](https://coveralls.io/repos/github/ChrisAlderson/anilist-api-pt/badge.svg?branch=master)](https://coveralls.io/github/ChrisAlderson/anilist-api-pt?branch=master)
[![Dependency Status](https://david-dm.org/ChrisAlderson/anilist-api-pt.svg)](https://david-dm.org/ChrisAlderson/anilist-api-pt)
[![devDependency Status](https://david-dm.org/ChrisAlderson/anilist-api-pt/dev-status.svg)](https://david-dm.org/ChrisAlderson/anilist-api-pt?type=dev)

An [AniList API](https://anilist-api.readthedocs.io/en/latest/introduction.html)
wrapper for NodeJS. For more information on the API you can read their
documentation [here](https://anilist-api.readthedocs.io/en/latest/introduction.html).

## Usage

#### Setup
```
npm install --save anilist-api-pt
```

### Initialize
```js
const AniListApi = require('anilist-api-pt')

const anilist = new AniListApi({
  clientId, // Your client id.
  clientSecret // Your client secret.
})


```

### Example usage

All the functions below will return a promise.

#### Auth
```js
anilist.auth()
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Anime

**getAnime:**
```js
anilist.anime.getAnime(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getPage:**
```js
anilist.anime.getPage(page)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getCharacters:**
```js
anilist.anime.getCharacters(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getAiring:**
```js
anilist.anime.getAiring(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**browseAnime:**
```js
anilist.anime.browseAnime({
  year: Number,
  season: String // winter, spring, summer, fall
  type: String, // tv, tv_short, movie, special, ova, ona, music, manga, novel, one_shot, doujin, manhua, manhwa
  status: String, // finished_airing, currently_airing, not_yet_aired, cancelled
  genres:  String // seperated by commas
  genres_exclude: String // seperated by commas
  sort: 'popularity', // id, score, popularity, start_date, end_date
  order: String, // desc, asc
  airing_data: Boolean,
  full_page: Boolean,
  page: Number
}).then(res => console.log(res))
  .catch(err => console.error(err))
```

**getGenres:**
```js
anilist.anime.getGenres()
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**searchAnime:**
```js
anilist.anime.searchAnime(query)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Characters

**getCharacters:**
```js
anilist.characters.getCharacters(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getPage:**
```js
anilist.characters.getPage(page)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**searchCharacters:**
```js
anilist.characters.searchCharacters(query)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Manga

**getManga:**
```js
anilist.manga.getManga(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getPage:**
```js
anilist.manga.getPage(page)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getCharacters:**
```js
anilist.manga.getCharacters(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**browseManga:**
```js
anilist.manga.browseManga({
  year: Number,
  season: String // winter, spring, summer, fall
  type: String, // tv, tv_short, movie, special, ova, ona, music, manga, novel, one_shot, doujin, manhua, manhwa
  status: String, // finished_publishing, publishing, not_yet_published, cancelled
  genres:  String // seperated by commas
  genres_exclude: String // seperated by commas
  sort: 'popularity', // id, score, popularity, start_date, end_date
  order: String, // desc, asc
  airing_data: Boolean,
  full_page: Boolean,
  page: Number
}).then(res => console.log(res))
  .catch(err => console.error(err))
```

**getGenres:**
```js
anilist.manga.getGenres()
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**searchManga:**
```js
anilist.manga.searchManga(query)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Staff

**getStaff:**
```js
anilist.staff.getStaff(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getPage:**
```js
anilist.staff.getPage(page)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**searchStaff:**
```js
anilist.staff.searchStaff(query)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

#### Studio

**getStudio:**
```js
anilist.studio.getStudio(id)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**getPage:**
```js
anilist.studio.getPage(page)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

**searchStudio:**
```js
anilist.studio.searchStudio(query)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

## Testing

You can run tests with the following npm command:
```
 $ CLIENT_ID=[Your client id] CLIENT_SECRET=[Your client secret] npm test
```

# License

MIT License

Copyright (c) 2017 - anilist-api-pt - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
