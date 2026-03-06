import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenreList from './genre-list';
import MOCK_GENRES from '../../test-data/mock-genres';

const SELECTED_GENRE = `Action`;

it(`GenreList renders correctly`, () => {
  const tree = renderer
    .create(
        <GenreList
          genres={MOCK_GENRES}
          selectedGenre={SELECTED_GENRE}
          onGenreSelect={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});
