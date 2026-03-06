import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import AddButton from './add-button';

it(`AddButton renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AddButton
            id={1}
            isAuth={true}
            isFavorite={false}
            onSetFavoriteStatus={jest.fn()} />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
