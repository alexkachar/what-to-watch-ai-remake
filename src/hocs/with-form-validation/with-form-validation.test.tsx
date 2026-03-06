import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withFormValidation from './with-form-validation';

const MockComponent = () => <div />;
const WrappedComponent = withFormValidation(MockComponent);

it(`withFormValidation renders correctly`, () => {
  const tree = renderer
    .create(
        <WrappedComponent />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
