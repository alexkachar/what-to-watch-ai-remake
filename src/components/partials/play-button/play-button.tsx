import * as React from 'react';

interface Props {
  isPlaying: boolean;
  onPlayButtonClick: () => void;
}

const PlayButton = (props: Props) => {

  const {isPlaying, onPlayButtonClick} = props;
  const icon = !isPlaying ? `play-s` : `pause`;

  return (
    <button type="button" className="player__play" onClick={onPlayButtonClick}>
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref={`#${icon}`} />
      </svg>
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
