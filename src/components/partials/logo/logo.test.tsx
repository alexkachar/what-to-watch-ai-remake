import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Logo from './logo';


it(`Logo renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Logo />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
