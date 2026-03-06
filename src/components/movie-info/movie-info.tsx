import * as React from 'react';

import {MovieTabs, tabs} from '../../constants';
import Movie from '../../interfaces/movie';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';

interface Props {
  movie: Movie;
  activeTab: string;
  onTabSwitch: (tab: string) => void;
}

class MovieInfo extends React.PureComponent<Props> {

  _getTab(activeTab, movie) {
    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        return <MovieOverview movie={movie} />;
      case MovieTabs.DETAILS:
        return <MovieDetails movie={movie} />;
      case MovieTabs.REVIEWS:
        return <MovieReviews movieId={movie.id} />;
      default:
        return <MovieOverview movie={movie} />;
    }
  }

  render() {
    const {movie, activeTab, onTabSwitch} = this.props;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">

            {tabs.map((tab) => (
              <li
                key={tab}
                className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
                <a
                  href="#"
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onTabSwitch(tab);
                  }}>
                  {tab}
                </a>
              </li>
            ))}

          </ul>
        </nav>
        {this._getTab(activeTab, movie)}
      </div>
    );
  }
}

export default withActiveTab(MovieInfo);
