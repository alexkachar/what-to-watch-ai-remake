import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FullScreenButton from './full-screen-button';

it(`PlayButton renders correctly`, () => {
  const tree = renderer
    .create(
        <FullScreenButton
          onFullScreenButtonClick={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
