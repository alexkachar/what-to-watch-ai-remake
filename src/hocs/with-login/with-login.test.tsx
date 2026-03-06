import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import withLogin from './with-login';
import mockStore from '../../test-data/mock-store';

const MockComponent = () => <div />;
const WrappedComponent = withLogin(MockComponent);

it(`withLogin renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <WrappedComponent onLogin={jest.fn()}/>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
