import * as React from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

import DataOperation from '../../store/operations/data/data';
import {getFavorites} from '../../store/reducers/data/selectors';
import {getAuthFlag} from '../../store/reducers/user/selectors';
import {AppRoutes} from '../../constants';

import Header from '../header/header';
import Footer from '../footer/footer';
import Movie from '../../interfaces/movie';
import MoviesList from '../movies-list/movies-list';

interface Props {
  onRequestFavorites: () => void;
  favorites: Movie[];
  isAuth: boolean;
}

class Favorites extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onRequestFavorites} = this.props;
    onRequestFavorites();
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to={AppRoutes.MAIN} replace />;
    }

    const {favorites} = this.props;
    return (
      <>
        <div className="user-page">

          <Header isFavoritesHeader={true} />
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MoviesList movies={favorites} />

          </section>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  isAuth: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestFavorites: () => {
    dispatch(DataOperation.loadFavorites());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
