import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withPlayerControls from './with-player-controls';

const MockComponent = () => <div />;
const WrappedComponent = withPlayerControls(MockComponent);

it(`withPlayerControls renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
