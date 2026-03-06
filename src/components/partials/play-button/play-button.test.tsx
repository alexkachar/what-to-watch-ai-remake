import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlayButton from './play-button';

it(`PlayButton renders correctly`, () => {
  const tree = renderer
    .create(
        <PlayButton
          isPlaying={true}
          onPlayButtonClick={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
