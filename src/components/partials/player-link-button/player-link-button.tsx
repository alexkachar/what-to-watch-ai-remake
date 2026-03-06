import * as React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  id: string | number;
}

const PlayerLinkButton = (props: Props) => {
  const {id} = props;
  return (
    <Link to={`/player/${id}`} className="btn btn--play movie-card__button">
      <svg viewBox="0 0 21 19" width={21} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </Link>

  );
};

export default PlayerLinkButton;
