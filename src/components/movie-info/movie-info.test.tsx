import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieInfo from './movie-info';
import MOCK_MOVIES from '../../test-data/mock-movies';

const ACTIVE_TAB = `Details`;

it(`MovieInfo renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieInfo
          movie={MOCK_MOVIES[0]}
          activeTab={ACTIVE_TAB}
          onTabSwitch={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
