import * as React from 'react';
import {connect} from 'react-redux';

import {getReviews} from '../../store/reducers/review/selectors';
import ReviewOperation from '../../store/operations/review/review';
import {checkIfEven, checkIfOdd} from '../../utils';

import ReviewCard from '../review-card/review-card';
import Review from '../../interfaces/review';
import Loader from '../loader/loader';

interface Props {
  movieId: number | string;
  reviews: Review[];
  onRequestReviews: (movieId: string | number) => void;
}

class MovieReviews extends React.PureComponent<Props> {

  componentDidMount() {
    const {onRequestReviews, movieId} = this.props;
    onRequestReviews(movieId);
  }

  componentDidUpdate(prevProps) {
    const {onRequestReviews, movieId} = this.props;

    if (movieId !== prevProps.movieId) {
      onRequestReviews(movieId);
    }
  }

  render() {

    const {reviews} = this.props;

    if (!reviews) {
      return <Loader />;
    }

    return (
      <div className="movie-card__reviews movie-card__row">

        <div className="movie-card__reviews-col">

          {reviews.map((review, i) => checkIfOdd(i + 1) ? <ReviewCard review={review} key={review.id} /> : null)}

        </div>

        <div className="movie-card__reviews-col">
          {reviews.map((review, i) => checkIfEven(i + 1) ? <ReviewCard review={review} key={review.id} /> : null)}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({

  onRequestReviews: (movieId) => {
    dispatch(ReviewOperation.loadReviews(movieId));
  }

});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
