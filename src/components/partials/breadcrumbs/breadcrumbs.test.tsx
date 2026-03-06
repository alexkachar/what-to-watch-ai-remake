import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Breadcrumbs from './breadcrumbs';

const MOVIE_TITLE = `The Grand Budapest Hotel`;
const MOVIE_ID = `1`;

it(`Breadcrumbs renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Breadcrumbs
            id={MOVIE_ID}
            movieTitle={MOVIE_TITLE} />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
