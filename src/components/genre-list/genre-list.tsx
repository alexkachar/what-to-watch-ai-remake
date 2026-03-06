import * as React from 'react';
import {reduceGenresList} from '../../utils';
interface Props {
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const GenreList = (props: Props) => {
  const {genres, onGenreSelect, selectedGenre} = props;
  const reducedGenres = reduceGenresList(genres);
  return (
    <ul className="catalog__genres-list">
      {reducedGenres.map((genre) => (
        <li
          className={`catalog__genres-item ${selectedGenre === genre ? `catalog__genres-item--active` : null}`}
          key={genre}
        >
          <a className="catalog__genres-link"
            style={{cursor: `pointer`}}
            onClick={(evt) => {
              evt.preventDefault();
              onGenreSelect(genre);
            }}>
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
};

export default GenreList;
