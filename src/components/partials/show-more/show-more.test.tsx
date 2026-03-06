import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMore from './show-more';

it(`ShowMore renders correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onShowMoreClick={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
