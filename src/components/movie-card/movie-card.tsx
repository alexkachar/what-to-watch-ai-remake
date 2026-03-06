import * as React from 'react';
import Movie from '../../interfaces/movie';
import {Link} from 'react-router-dom';

import withToggleActive from '../../hocs/with-toggle-active/with-toggle-active';
import TrailerPlayer from '../trailer-player/trailer-player';

interface Props {
  movie: Movie;
  isActive: boolean;
  onSetActive: () => void;
  onSetInactive: () => void;
}

const MoviesList = (props: Props) => {
  const {movie, isActive, onSetActive, onSetInactive} = props;
  const {id, title, previewImage, previewVideoLink} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onSetActive}
      onMouseLeave={onSetInactive}
    >
      <Link to={`/film/${id}`}>
        <div className="small-movie-card__image">
          <TrailerPlayer
            previewImage={previewImage}
            previewVideoLink={previewVideoLink}
            isPlaying={isActive}
          />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`/film/${id}`}
          className="small-movie-card__link"
          style={{color: `#c9b37e`}}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default withToggleActive(MoviesList);
