import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewCard from './review-card';
import Review from '../../interfaces/review';
import mockReviews from '../../test-data/mock-reviews';

const REVIEW: Review = mockReviews[0];

it(`Review renders correctly`, () => {
  const tree = renderer
    .create(<ReviewCard
      review={REVIEW}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
