import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../constants';

interface Props {
  id: number | string;
  isAuth: boolean;
  isFavorite: boolean;
  onSetFavoriteStatus: (movieId: number | string, isFavorite: boolean) => void;
}

const AddButton = (props: Props) => {
  const {id, isAuth, isFavorite, onSetFavoriteStatus} = props;
  return (
    <Link to={isAuth ? {} : AppRoutes.LOGIN}
      className="btn btn--list movie-card__button"
      onClick={isAuth ? () => onSetFavoriteStatus(id, isFavorite) : null}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={isFavorite ? `#in-list` : `#add`} />
      </svg>
      <span>My list</span>
    </Link>
  );
};

export default AddButton;
