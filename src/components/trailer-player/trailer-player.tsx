import * as React from 'react';

interface Props {
  isPlaying: boolean;
  previewImage: string;
  previewVideoLink: string;
}

class TrailerPlayer extends React.PureComponent<Props> {
  private _videoRef;

  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }

  _handleMouseEnter() {
    this.setState({
      isPlaying: true
    });
  }

  _handleMouseLeave() {
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {previewImage, previewVideoLink} = this.props;
    return (
      <video
        width="280"
        height="175"
        muted={true}
        ref={this._videoRef}
        poster={previewImage}
        src={previewVideoLink}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      />
    );
  }

}

export default TrailerPlayer;
