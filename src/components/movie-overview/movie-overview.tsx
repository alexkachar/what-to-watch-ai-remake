import * as React from 'react';

import {formatRating} from '../../utils';
import Movie from '../../interfaces/movie';

interface Props {
  movie: Movie;
}

const MovieOverview = (props: Props) => {

  const {movie} = props;

  const {
    rating,
    scoresCount,
    description,
    director,
    starring
  } = movie;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{formatRating(rating)}</span>
          <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>
        <p className="movie-card__starring"><strong>{`Starring: ${starring.map((actor) => actor).join(`, `)}`}</strong></p>
      </div>

    </>
  );
};

export default MovieOverview;
