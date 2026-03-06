import * as React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoutes } from '../../constants';
import { filterMovies, getMoviesLimit } from '../../store/reducers/ui/selectors';
import { getPromoMovie, getGenres, getLoadingFlag } from '../../store/reducers/data/selectors';
import { getSelectedGenre } from '../../store/reducers/ui/selectors';
import { getAuthFlag } from '../../store/reducers/user/selectors';
import { MOVIES_LIMIT_ADD_STEP } from '../../constants';
import UiActionCreator from '../../store/actions/ui/ui';
import UserOperation from '../../store/operations/user/user';
import DataOperation from '../../store/operations/data/data';

import Movie from '../../interfaces/movie';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import ReviewForm from '../review-form/review-form';
import VideoPlayer from '../video-player/video-player';

interface Props {
  movies: Movie[];
  promoMovie: Movie;
  genres: string[];
  selectedGenre: string;
  moviesLimit: number;
  loading: boolean;
  isAuth: boolean;
  onGenreSelect: (genre: string) => void;
  onShowMoreClick: () => void;
  onLogin: (authData: {}) => void;
  onSetFavoriteStatus: (movieId: number | string, isFavorite: boolean) => void;
}

const MoviePageRoute = ({ onSetFavoriteStatus }: { onSetFavoriteStatus: (id: number | string, isFav: boolean) => void }) => {
  const { id } = useParams<{ id: string }>();
  return <MoviePage movieId={id} onSetFavoriteStatus={onSetFavoriteStatus} />;
};

const ReviewFormRoute = () => {
  const { id } = useParams<{ id: string }>();
  return <ReviewForm movieId={id} />;
};

const VideoPlayerRoute = () => {
  const { id } = useParams<{ id: string }>();
  return <VideoPlayer movieId={id} />;
};

const App = (props: Props) => {
  const {
    isAuth,
    movies,
    promoMovie,
    genres,
    selectedGenre,
    moviesLimit,
    loading,
    onGenreSelect,
    onShowMoreClick,
    onLogin,
    onSetFavoriteStatus,
  } = props;

  const showMoreAccess = movies.length > moviesLimit;
  const moviesToList = movies.slice(0, moviesLimit);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN}
          element={
            <Main
              movies={moviesToList}
              promoMovie={promoMovie}
              genres={genres}
              selectedGenre={selectedGenre}
              showMoreAccess={showMoreAccess}
              onGenreSelect={onGenreSelect}
              onShowMoreClick={onShowMoreClick}
              onSetFavoriteStatus={onSetFavoriteStatus}
              loading={loading}
              isAuth={isAuth}
            />
          }
        />

        <Route path={AppRoutes.MOVIE}
          element={<MoviePageRoute onSetFavoriteStatus={onSetFavoriteStatus} />}
        />

        <Route path={AppRoutes.ADD_REVIEW}
          element={<ReviewFormRoute />}
        />

        <Route path={AppRoutes.LOGIN}
          element={
            <Login
              onLogin={onLogin}
              loading={loading}
              isAuth={isAuth}
            />
          }
        />

        <Route path={AppRoutes.FAVORITES}
          element={<Favorites />}
        />

        <Route path={AppRoutes.PLAYER}
          element={<VideoPlayerRoute />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: filterMovies(state),
  promoMovie: getPromoMovie(state),
  genres: getGenres(state),
  selectedGenre: getSelectedGenre(state),
  moviesLimit: getMoviesLimit(state),
  loading: getLoadingFlag(state),
  isAuth: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({

  onGenreSelect(genre: string) {
    dispatch(UiActionCreator.selectGenre(genre));
    dispatch(UiActionCreator.resetMoviesLimit());
  },

  onShowMoreClick: () => {
    dispatch(UiActionCreator.setMoviesLimit(MOVIES_LIMIT_ADD_STEP));
  },

  onLogin(authData: {}) {
    dispatch(UserOperation.login(authData));
  },

  onSetFavoriteStatus(movieId, isFavorite: boolean) {
    dispatch(DataOperation.setFavoriteStatus(movieId, isFavorite));
  },

  onSetMovieId: (movieId) => {
    const newMovieId = parseInt(movieId, 10);
    dispatch(UiActionCreator.setMovieId(newMovieId));
  }

});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
