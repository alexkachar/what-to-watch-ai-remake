import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MovieReviews} from './movie-reviews';
import Review from '../../interfaces/review';
import mockReviews from '../../test-data/mock-reviews';

const REVIEWS: Review[] = mockReviews;

it(`MovieReviews renders correctly`, () => {
  const tree = renderer
  .create(
      <MovieReviews
        movieId={1}
        reviews={REVIEWS}
        onRequestReviews={jest.fn()}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
.toJSON();
  expect(tree).toMatchSnapshot();
});
