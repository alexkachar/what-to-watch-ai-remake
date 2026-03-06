import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import {Favorites} from './favorites';
import MOCK_STORE from '../../test-data/mock-store';
import MOCK_MOVIES from '../../test-data/mock-movies';
import Movie from '../../interfaces/movie';

const FAVORITES: Movie[] = MOCK_MOVIES;

it(`MoviePage renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={MOCK_STORE}>
          <BrowserRouter>
            <Favorites
              favorites={FAVORITES}
              isAuth={true}
              onRequestFavorites={jest.fn()} />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
