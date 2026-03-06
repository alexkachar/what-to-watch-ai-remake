import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {ReviewForm} from './review-form';

import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_STORE from '../../test-data/mock-store';


const MOVIE = MOCK_MOVIES[0];

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.`;

it(`ReviewForm renders correctly`, () => {

  const tree = renderer
    .create(
        <Provider store={MOCK_STORE}>
          <BrowserRouter>
            <ReviewForm
              movieId={1}
              isAuth={true}
              movie={MOVIE}
              sending={false}
              error={false}
              rating={4}
              isRatingValid={true}
              text={TEXT}
              isTextValid={true}
              onRatingChange={jest.fn()}
              onTextChange={jest.fn()}
              onSetSendingFlag={jest.fn()}
              onSubmitReview={jest.fn()}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
