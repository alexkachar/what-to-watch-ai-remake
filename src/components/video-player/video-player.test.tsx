import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {VideoPlayer} from './video-player';

import mockMovies from '../../test-data/mock-movies';

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <VideoPlayer
            movieId={`1`}
            movie={mockMovies[0]}
            progress={30}
            timeLeft={70}
            isPlaying={true}
            onPlayButtonClick={jest.fn()}
            onFullScreenButtonClick={jest.fn()}
            onExitButtonClick={jest.fn()}
            onSetDuration={jest.fn()}
            onTimeUpdate={jest.fn()}
            onSetMovieId={jest.fn()}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
