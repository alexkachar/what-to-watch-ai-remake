import * as React from 'react';

import {convertDate} from '../../utils';
import Review from '../../interfaces/review';

interface Props {
  review: Review;
}

const ReviewCard = (props: Props) => {
  const {review} = props;

  const {
    user,
    rating,
    comment,
    date
  } = review;

  return (
    <div className="review" style={{borderBottomColor: `rgba(255,255,255,.24)`}}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{convertDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>

  );
};

export default ReviewCard;
