import * as React from "react";

interface State {
  isPlaying: boolean;
  progress: number;
  playTime: number;
  duration: number;
}

const withPlayerControls = (Component) => {

  type P = React.ComponentProps<typeof Component>

  class WithPlayerControls extends React.PureComponent<P, State> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        progress: 0,
        playTime: 0,
        duration: 0
      };

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
      this.setDuration = this.setDuration.bind(this);
    }

    handlePlayButtonClick() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }


    handleExitButtonClick() {
      this.setState({
        isPlaying: false
      });
    }

    handleTimeUpdate(evt) {
      this.setState({
        playTime: Math.round(evt.target.currentTime),
        progress: Math.round(
            (evt.target.currentTime / evt.target.duration) * 100
        )
      });
    }

    setDuration(evt) {
      this.setState({
        duration: Math.round(evt.target.duration)
      });
    }

    render() {
      const {playTime, isPlaying, duration, progress} = this.state;
      const timeLeft = duration - playTime;

      return (
        <Component
          {...this.props}
          playTime={playTime}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          timeLeft={timeLeft}
          onPlayButtonClick={this.handlePlayButtonClick}
          onExitButtonClick={this.handleExitButtonClick}
          onTimeUpdate={this.handleTimeUpdate}
          onSetDuration={this.setDuration}
        />
      );
    }
  }

  return WithPlayerControls;
};

export default withPlayerControls;
