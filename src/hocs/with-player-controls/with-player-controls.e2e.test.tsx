import * as React from 'react';
import { render, screen } from '@testing-library/react';

import withPlayerControls from './with-player-controls';

describe(`withPlayerControls hoc e2e tests`, () => {

  const MockComponent = ({
    isPlaying,
    progress,
    playTime,
    duration,
  }: {
    isPlaying: boolean;
    progress: number;
    playTime: number;
    duration: number;
  }) => (
    <div>
      <span data-testid="is-playing">{String(isPlaying)}</span>
      <span data-testid="progress">{progress}</span>
      <span data-testid="play-time">{playTime}</span>
      <span data-testid="duration">{duration}</span>
    </div>
  );

  const Wrapped = withPlayerControls(MockComponent);

  it(`initial state set correctly`, () => {
    render(<Wrapped />);
    expect(screen.getByTestId(`is-playing`)).toHaveTextContent(`false`);
    expect(screen.getByTestId(`progress`)).toHaveTextContent(`0`);
    expect(screen.getByTestId(`play-time`)).toHaveTextContent(`0`);
    expect(screen.getByTestId(`duration`)).toHaveTextContent(`0`);
  });

});
