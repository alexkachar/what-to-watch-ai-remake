import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {formatTime} from '../../utils';
import Movie from '../../interfaces/movie';
import {getMovieById} from '../../store/reducers/ui/selectors';
import UiActionCreator from '../../store/actions/ui/ui';

import FullScreenButton from '../partials/full-screen-button/full-screen-button';
import PlayButton from '../partials/play-button/play-button';
import Loader from '../loader/loader';
import withPlayerControls from '../../hocs/with-player-controls/with-player-controls';

interface Props {
  movieId: string;
  movie: Movie;
  progress: number;
  timeLeft: number;
  isPlaying: boolean;
  onPlayButtonClick: () => void;
  onFullScreenButtonClick: () => void;
  onExitButtonClick: () => void;
  onSetDuration: () => void;
  onTimeUpdate: () => void;
  onSetMovieId: (movieId: number | string) => void;
}

class VideoPlayer extends React.PureComponent<Props> {
  private _videoRef;
  private _playerRef;

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._playerRef = React.createRef();

    this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
  }

  componentDidMount() {
    const {onSetMovieId, movieId} = this.props;
    onSetMovieId(movieId);
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    const {onSetMovieId, movieId, isPlaying} = this.props;

    if (movieId !== prevProps.offerId) {
      onSetMovieId(movieId);
    }

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  _handleFullScreenButtonClick() {
    const player = this._playerRef.current;

    if (!document.fullscreenElement) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  render() {
    if (!this.props.movie) {
      return <Loader />;
    }

    const {
      isPlaying,
      progress,
      timeLeft,
      onPlayButtonClick,
      onExitButtonClick,
      onSetDuration,
      onTimeUpdate,
      movie
    } = this.props;

    const {
      title,
      backgroundImage,
      videoLink
    } = movie;

    return (
      <div className="player" ref={this._playerRef}>
        <video
          className="player__video"
          ref={this._videoRef}
          poster={backgroundImage}
          src={videoLink}
          onCanPlay={onSetDuration}
          onTimeUpdate={onTimeUpdate}
        />
        <Link to="/">
          <button
            type="button"
            className="player__exit"
            onClick={onExitButtonClick}
          >
            Exit
          </button>
        </Link>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max={100} />
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatTime(timeLeft)}</div>
          </div>
          <div className="player__controls-row">
            <PlayButton
              isPlaying={isPlaying}
              onPlayButtonClick={onPlayButtonClick}
            />
            <div className="player__name">{title}</div>
            <FullScreenButton onFullScreenButtonClick={this._handleFullScreenButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: getMovieById(state),
});

const mapDispatchToProps = (dispatch) => ({

  onSetMovieId: (movieId) => {
    const newMovieId = parseInt(movieId, 10);
    dispatch(UiActionCreator.setMovieId(newMovieId));
  }

});

const withPlayersControlsAndConnect = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withPlayerControls
);

export {VideoPlayer};

export default withPlayersControlsAndConnect(VideoPlayer);
