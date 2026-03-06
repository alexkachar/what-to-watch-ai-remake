import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Main from './main';
import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_GENRES from '../../test-data/mock-genres';
import store from '../../test-data/mock-store';

const SELECTED_GENRE = `Action`;

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Main
              movies={MOCK_MOVIES}
              promoMovie={MOCK_MOVIES[0]}
              genres={MOCK_GENRES}
              selectedGenre={SELECTED_GENRE}
              showMoreAccess={true}
              loading={false}
              isAuth={false}
              onGenreSelect={jest.fn()}
              onShowMoreClick={jest.fn()}
              onSetFavoriteStatus={jest.fn()}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
