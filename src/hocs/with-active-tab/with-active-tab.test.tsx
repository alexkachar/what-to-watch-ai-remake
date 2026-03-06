import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withActiveTab from './with-active-tab';

const MockComponent = () => <div />;
const WrappedComponent = withActiveTab(MockComponent);

it(`withActiveTab renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
