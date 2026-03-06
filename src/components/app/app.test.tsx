
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {App} from './app';
import store from '../../test-data/mock-store';
import {INITIAL_MOVIES_LIMIT} from '../../constants';

const SELECTED_GENRE = `Action`;

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            selectedGenre={SELECTED_GENRE}
            moviesLimit={INITIAL_MOVIES_LIMIT}
            loading={false}
            isAuth={false}
            movies={[]}
            promoMovie={null}
            genres={[]}
            onGenreSelect={jest.fn()}
            onShowMoreClick={jest.fn()}
            onLogin={jest.fn()}
            onSetFavoriteStatus={jest.fn()}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
