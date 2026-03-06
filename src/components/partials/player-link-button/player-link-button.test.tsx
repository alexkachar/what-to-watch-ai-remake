import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PlayerLinkButton from './player-link-button';

it(`PlayerLinkButton renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <PlayerLinkButton
            id={`1`}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
