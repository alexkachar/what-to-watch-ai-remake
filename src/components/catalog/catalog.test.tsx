import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Catalog from './catalog';
import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_GENRES from '../../test-data/mock-genres';

const SELECTED_GENRE = `Action`;

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Catalog
            movies={MOCK_MOVIES}
            genres={MOCK_GENRES}
            selectedGenre={SELECTED_GENRE}
            showMoreAccess={true}
            onGenreSelect={jest.fn()}
            onShowMoreClick={jest.fn()}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
