import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieDetails from './movie-details';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`MovieOverview renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieDetails
          movie={MOCK_MOVIES[0]}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
