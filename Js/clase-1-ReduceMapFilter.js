let ratings = [
  {movieId: 1, value: 4},
  {movieId: 2, value: 3},
  {movieId: 3, value: 2},
  {movieId: 4, value: 5},
  {movieId: 5, value: 2},
  {movieId: 6, value: 1},
  {movieId: 7, value: 3},
  {movieId: 8, value: 5},
  {movieId: 9, value: 5},
  {movieId: 10, value: 4},
  {movieId: 11, value: 4}
]
let movies = [
  {id: 1, title: 'Iron Man'},
  {id: 2, title: 'Spiderman'},
  {id: 3, title: 'Thor'},
  {id: 4, title: 'Hulk'},
  {id: 5, title: 'X-Men'},
  {id: 6, title: 'Capitan America'}
]

let ratingsMovieMap = ratings.reduce((ratingMovieIds, rating) => {
  let key = rating.movieId
  let isRatingSet = key in ratingMovieIds
  if (!isRatingSet) {
    ratingMovieIds[key] = rating
  }
  return ratingMovieIds
}, {})

let sugerencias = movies.map(movie => {
  let rating = ratingsMovieMap[movie.id].value
  return Object.assign(movie, {rating: rating})
})
  .filter(movie => movie.rating >= 3)
  .map(movie => movie.title + ' ' + '♥ '.repeat(movie.rating)).join('\n')
console.log('sugerencias', sugerencias)
