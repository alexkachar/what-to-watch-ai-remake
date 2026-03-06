import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withToggleActive from './with-toggle-active';

const MockComponent = () => <div />;
const WrappedComponent = withToggleActive(MockComponent);

it(`withActiveTab renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
