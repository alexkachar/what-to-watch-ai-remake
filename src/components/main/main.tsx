import * as React from 'react';

import PromoMovieCard from '../promo-movie-card/promo-movie-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Movie from '../../interfaces/movie';
import Loader from '../loader/loader';

interface Props {
  movies: Movie[];
  promoMovie: Movie;
  genres: string[];
  selectedGenre: string;
  showMoreAccess: boolean;
  isAuth: boolean;
  loading: boolean;
  onGenreSelect: (genre: string) => void;
  onShowMoreClick: () => void;
  onSetFavoriteStatus: (movieId: number | string, isFavorite: boolean) => void;
}

const Main = (props: Props) => {
  const {
    movies,
    promoMovie,
    genres,
    selectedGenre,
    showMoreAccess,
    loading,
    isAuth,
    onGenreSelect,
    onShowMoreClick,
    onSetFavoriteStatus,
  } = props;

  return loading ? <Loader /> : (
    <div>
      <PromoMovieCard
        promoMovie={promoMovie}
        isAuth={isAuth}
        onSetFavoriteStatus={onSetFavoriteStatus}
      />
      <div className="page-content">
        <Catalog
          movies={movies}
          genres={genres}
          selectedGenre={selectedGenre}
          showMoreAccess={showMoreAccess}
          onGenreSelect={onGenreSelect}
          onShowMoreClick={onShowMoreClick}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
