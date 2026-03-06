import * as React from 'react';

import MovieCard from '../movie-card/movie-card';
import Movie from '../../interfaces/movie';

interface Props {
  movies: Movie[];
}

const MoviesList = (props: Props) => {
  const {movies} = props;
  return (
    <div className="catalog__movies-list">

      {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

    </div>
  );
};

export default MoviesList;
