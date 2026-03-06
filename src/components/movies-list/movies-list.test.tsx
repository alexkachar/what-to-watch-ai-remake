import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import MoviesList from './movies-list';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`MoviesList renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MoviesList movies={MOCK_MOVIES} />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
