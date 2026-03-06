import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Footer from './footer';

it(`Footer renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
