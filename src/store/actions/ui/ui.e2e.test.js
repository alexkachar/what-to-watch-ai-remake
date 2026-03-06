import ActionCreator, {ActionTypes} from './ui';

describe(`UI action creator work correctly`, () => {
  it(`Action creator for selectGenre returns correct action`, () => {
    expect(ActionCreator.selectGenre(`Action`)).toEqual({
      type: ActionTypes.SELECT_GENRE,
      payload: `Action`,
    });
  });

  it(`Action creator for setMovieId returns correct action`, () => {
    expect(ActionCreator.setMovieId(1)).toEqual({
      type: ActionTypes.SET_MOVIE_ID,
      payload: 1
    });
  });

  it(`Action creator for setMoviesLimit returns correct action`, () => {
    expect(ActionCreator.setMoviesLimit(16)).toEqual({
      type: ActionTypes.SET_MOVIES_LIMIT,
      payload: 16
    });
  });

  it(`Action creator for resetMoviesLimit returns correct action`, () => {
    expect(ActionCreator.resetMoviesLimit()).toEqual({
      type: ActionTypes.RESET_MOVIES_LIMIT,
    });
  });

});
