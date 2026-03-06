import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Login from './login';
import mockStore from '../../test-data/mock-store';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Login
              onLogin={jest.fn()}
              loading={false}
              isAuth={false}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
