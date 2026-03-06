import {Months} from './constants';

export const extend = (a, b) => Object.assign({}, a, b);

export const reduceGenresList = (genres) => genres.length >= 10 ? genres : genres.slice(0, 10);

export const getGenresList = (movies) => {
  const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
  genres.unshift(`All genres`);
  return genres;
};

export const formatMovie = (movie) => (
  {
    id: movie.id,
    title: movie.name,
    genre: movie.genre,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    released: movie.released,
    isFavorite: movie.is_favorite,
  }
);

export const formatMovies = (movies) => movies.map((movie) => formatMovie(movie));

export const filterMoviesByGenre = (movies, genre) => movies.filter((movie) => movie.genre === genre);

export const excludeMovieById = (movies, movieId) => movies.filter((movie) => movie.id !== movieId);

export const reduceMovies = (movies, limit) => movies.length <= limit ? movies : movies.slice(0, limit);

export const getSimilarMovies = (movies, genre) => reduceMovies(filterMoviesByGenre(movies, genre), 4);

export const formatRating = (rating) => {
  switch (true) {
    case rating <= 3:
      return `bad`;
    case rating > 3 && rating <= 5:
      return `normal`;
    case rating > 5 && rating <= 8:
      return `good`;
    case rating > 8 && rating < 10:
      return `very good`;
    case (rating === 10):
      return `awesome`;
    default:
      return `unknown`;
  }
};

export const convertDate = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = Months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatUser = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  avatarUrl: user.avatar_url,
});

export const formatTime = (time) => {
  time = Number(time);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time % 3600 / 60);
  const seconds = Math.floor(time % 3600 % 60);

  return (`0` + hours).slice(-2) + `:` + (`0` + minutes).slice(-2) + `:` + (`0` + seconds).slice(-2);
};


export const checkIfEven = (number) => number % 2 === 0;

export const checkIfOdd = (number) => Math.abs(number % 2) === 1;
