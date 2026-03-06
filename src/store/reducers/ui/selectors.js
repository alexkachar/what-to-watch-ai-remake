import {createSelector} from 'reselect';
import NameSpace from '../../name-space';
import {getMovies} from '../data/selectors';
import {filterMoviesByGenre} from '../../../utils';

const NAME_SPACE = NameSpace.UI;

export const getSelectedGenre = (state) => {
  return state[NAME_SPACE].selectedGenre;
};

export const getMovieId = (state) => {
  return state[NAME_SPACE].movieId;
};

export const getMoviesLimit = (state) => {
  return state[NAME_SPACE].moviesLimit;
};

export const filterMovies = createSelector(
    [getSelectedGenre, getMovies],
    (selectedGenre, movies) => {
      if (selectedGenre === `All genres`) {
        return movies;
      }

      return filterMoviesByGenre(movies, selectedGenre);
    }
);

export const getMovieById = createSelector(
    [getMovies, getMovieId],
    (movies, movieId) => {
      return movies.find((movie) => movie.id === movieId);
    }
);
