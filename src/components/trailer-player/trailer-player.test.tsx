import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TrailerPlayer from './trailer-player';

import mockMovies from '../../test-data/mock-movies';

const {previewImage, previewVideoLink} = mockMovies[0];

it(`TrailerPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <TrailerPlayer
          isPlaying={true}
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
