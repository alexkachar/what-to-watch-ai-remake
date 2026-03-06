import * as React from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {getMovieById} from '../../store/reducers/ui/selectors';
import {getAuthFlag} from '../../store/reducers/user/selectors';
import {getSendingFlag, getErrorFlag} from '../../store/reducers/review/selectors';
import ReviewOperation from '../../store/operations/review/review';
import ActionCreator from '../../store/actions/review/review';
import withFormValidation from '../../hocs/with-form-validation/with-form-validation';
import {SEND_REVIEW_ERROR, Ratings, ReviewLenghts} from '../../constants';

import Logo from '../partials/logo/logo';
import UserBlock from '../partials/user-block/user-block';
import Breadcrumbs from '../partials/breadcrumbs/breadcrumbs';
import Loader from '../loader/loader';
import Movie from '../../interfaces/movie';

interface Props {
  movieId: number | string;
  movie: Movie;
  isAuth: boolean;
  rating: number;
  sending: boolean;
  error: boolean;
  text: string;
  isRatingValid: boolean;
  isTextValid: boolean;
  onRatingChange: () => void;
  onTextChange: () => void;
  onSetSendingFlag: (flag: boolean) => void;
  onSubmitReview: (offerId: number | string, review: {rating: number; text: string}) => void;
}

class ReviewForm extends React.PureComponent <Props> {
    private _formRef;
    private _submitRef;
    private _textRef;

    constructor(props) {
      super(props);

      this._formRef = React.createRef();
      this._submitRef = React.createRef();
      this._textRef = React.createRef();

      this._setSubmitAccess = this._setSubmitAccess.bind(this);
      this._setTextAreaAccess = this._setTextAreaAccess.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleFormReset = this._handleFormReset.bind(this);

    }

    componentDidUpdate() {
      this._setSubmitAccess();
      this._setTextAreaAccess();
    }

    _setSubmitAccess() {
      const {isTextValid, isRatingValid} = this.props;
      const isValid = isRatingValid && isTextValid;
      const submitButton = this._submitRef.current;
      const {sending} = this.props;

      if (!isValid || sending) {
        submitButton.setAttribute(`disabled`, `disabled`);
      } else {
        submitButton.removeAttribute(`disabled`);
      }
    }

    _setTextAreaAccess() {
      const {sending} = this.props;
      const textArea = this._textRef.current;

      if (sending) {
        textArea.setAttribute(`disabled`, `disabled`);
      } else {
        textArea.removeAttribute(`disabled`);
      }
    }

    _handleFormReset() {
      const form = this._formRef.current;
      const {error, sending} = this.props;

      if (!sending && !error) {
        form.reset();
        history.back();
      }
    }

    _handleSubmit(evt) {
      const {onSubmitReview, onSetSendingFlag} = this.props;
      const {rating, isRatingValid, text, isTextValid} = this.props;
      const {movieId} = this.props;

      evt.preventDefault();

      if (isRatingValid && isTextValid) {
        onSetSendingFlag(true);
        onSubmitReview(movieId, {rating, text});
        this._handleFormReset();
      }
    }

    render() {

      const {isAuth} = this.props;

      if (!isAuth) {
        return <Navigate to={AppRoutes.LOGIN} replace />;
      }

      const {
        movie,
        rating,
        error,
        onRatingChange,
        onTextChange
      } = this.props;

      if (!movie) {
        return <Loader />;
      }

      const {
        id,
        title,
        backgroundImage,
        backgroundColor,
        posterImage
      } = movie;

      return (
        <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>

          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>
            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">

              <Logo />

              <Breadcrumbs id={id} movieTitle={title} />

              <UserBlock />
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={posterImage} alt={title} width={218} height={327} />
            </div>

          </div>
          <div className="add-review">
            <form
              action="#"
              className="add-review__form"
              onSubmit={this._handleSubmit}
              ref={this._formRef}
            >
              {error && <p>{SEND_REVIEW_ERROR}</p>}
              <div className="rating">
                <div className="rating__stars">

                  {Array.from(Array(Ratings.MAX)).map((_, index) => {
                    const starsCount = index + 1;
                    return (
                      <React.Fragment key={starsCount}>
                        <input
                          className="rating__input"
                          id={`star-${starsCount}`}
                          type="radio"
                          name="rating"
                          value={starsCount}
                          checked={rating === starsCount}
                          onChange={onRatingChange}
                        />
                        <label className="rating__label" htmlFor={`star-${starsCount}`}>Rating {starsCount}</label>
                      </React.Fragment>
                    );
                  })}


                </div>
              </div>
              <div className="add-review__text" style={{background: `rgba(0,0,0,.26)`}}>
                <textarea
                  className="add-review__textarea"
                  name="review-text"
                  id="review-text"
                  placeholder="Review text"
                  defaultValue={``}
                  onChange={onTextChange}
                  maxLength={ReviewLenghts.MAX}
                  ref={this._textRef}
                />
                <div className="add-review__submit">
                  <button
                    className="add-review__btn"
                    type="submit"
                    disabled
                    ref={this._submitRef}
                  >
                  Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      );
    }
}

const mapStateToProps = (state, _ownProps: { movieId: number | string }) => ({
  isAuth: getAuthFlag(state),
  movie: getMovieById(state),
  sending: getSendingFlag(state),
  error: getErrorFlag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetSendingFlag(flag) {
    dispatch(ActionCreator.setSendingFlag(flag));
  },
  onSubmitReview(offerId, reviewData) {
    dispatch(ReviewOperation.submitReview(offerId, reviewData));
  },
});

export {ReviewForm};

export default connect(mapStateToProps, mapDispatchToProps)(withFormValidation(ReviewForm));
