# anilist-api-pt

[![Build Status](https://travis-ci.org/ChrisAlderson/anilist-api-pt.svg?branch=master)]()
[![Dependency Status](https://david-dm.org/ChrisAlderson/anilist-api-pt.svg)](https://david-dm.org/ChrisAlderson/anilist-api-pt)
[![devDependency Status](https://david-dm.org/ChrisAlderson/anilist-api-pt/dev-status.svg)](https://david-dm.org/ChrisAlderson/anilist-api-pt#info=devDependencies)

An [AniList API](https://anilist-api.readthedocs.io/en/latest/introduction.html) wrapper for NodeJS.

## Usage

#### Setup
```
npm install --save anilist-api-pt
```

### Initialize
```js
const AniListAPI = require('anilist-api-pt');

const anilistApi = new AniListAPI({client_id, client_secret});
```

### Example usage

All the functions below will return a promise.

#### Auth
```js
anilistApi.auth()
```

#### Anime

**getAnime:**
```js
anilistApi.anime.getAnime(id)
```

**getPage:**
```js
anilistApi.anime.getPage(page)
```

**getCharacters:**
```js
anilistApi.anime.getCharacters(id)
```

**getAiring:**
```js
anilistApi.anime.getAiring(id)
```

**browseAnime:**
```js
anilistApi.anime.browseAnime({
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
})
```

**getGenres:**
```js
anilistApi.anime.getGenres()
```

**searchAnime:**
```js
anilistApi.anime.searchAnime(query)
```

#### Characters

**getCharacters:**
```js
anilistApi.characters.getCharacters(id)
```

**getPage:**
```js
anilistApi.characters.getPage(page)
```

**searchCharacters:**
```js
anilistApi.characters.searchCharacters(query)
```

#### Manga

**getManga:**
```js
anilistApi.manga.getManga(id)
```

**getPage:**
```js
anilistApi.manga.getPage(page)
```

**getCharacters:**
```js
anilistApi.manga.getCharacters(id)
```

**browseManga:**
```js
anilistApi.manga.browseManga({
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
})
```

**getGenres:**
```js
anilistApi.manga.getGenres()
```

**searchManga:**
```js
anilistApi.manga.searchManga(query)
```

#### Staff

**getStaff:**
```js
anilistApi.staff.getStaff(id)
```

**getPage:**
```js
anilistApi.staff.getPage(page)
```

**searchStaff:**
```js
anilistApi.staff.searchStaff(query)
```

#### Studio

**getStudio:**
```js
anilistApi.studio.getStudio(id)
```

**getPage:**
```js
anilistApi.studio.getPage(page)
```

**searchStudio:**
```js
anilistApi.studio.searchStudio(query)
```

# License

MIT License

Copyright (c) 2016 - anilist-api-pt - Released under the MIT license.

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
