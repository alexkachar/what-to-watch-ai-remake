import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import PromoMovieCard from './promo-movie-card';
import store from '../../test-data/mock-store';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`PromoMovieCard renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <PromoMovieCard
              promoMovie={MOCK_MOVIES[0]}
              isAuth={false}
              onSetFavoriteStatus={jest.fn()}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
