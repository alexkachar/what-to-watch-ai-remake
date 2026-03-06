import * as React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  id: string | number;
  movieTitle: string;
}

const Breadcrumbs = (props: Props) => {
  const {movieTitle, id} = props;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/film/${id}`} className="breadcrumbs__link">{movieTitle}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
