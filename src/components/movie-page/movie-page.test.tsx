import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import MoviePage from './movie-page';
import MOCK_STORE from '../../test-data/mock-store';

it(`MoviePage renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={MOCK_STORE}>
          <BrowserRouter>
            <MoviePage />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
