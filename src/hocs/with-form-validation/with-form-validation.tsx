import * as React from 'react';
import {Ratings, ReviewLenghts} from '../../constants';

interface State {
  rating: number;
  text: string;
  isRatingValid: boolean;
  isTextValid: boolean;
}

const withFormValidation = (Component) => {
  type P = React.ComponentProps<typeof Component>;

  class WithFormValidation extends React.PureComponent<P, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: Ratings.DEFAULT,
        text: ``,
        isRatingValid: true,
        isTextValid: false
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._checkRatingValidity = this._checkRatingValidity.bind(this);
      this._checkTextValidity = this._checkTextValidity.bind(this);
    }

    componentDidUpdate() {
      this._checkRatingValidity();
      this._checkTextValidity();
    }

    _handleRatingChange(evt) {
      const rating = parseInt(evt.target.value, 10);

      this.setState({
        rating
      });
    }

    _handleTextChange(evt) {
      const text = evt.target.value;

      this.setState({
        text
      });
    }

    _checkTextValidity() {
      const {text} = this.state;
      const isTextValid = text.length >= ReviewLenghts.MIN && text.length <= ReviewLenghts.MAX;

      this.setState({
        isTextValid
      });
    }

    _checkRatingValidity() {
      const {rating} = this.state;
      const isRatingValid = rating >= Ratings.MIN && rating <= Ratings.MAX;

      this.setState({
        isRatingValid
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          text={this.state.text}
          isRatingValid={this.state.isRatingValid}
          isTextValid={this.state.isTextValid}
          onCheckRatingValidity={this._checkRatingValidity}
          onCheckTextValidity={this._checkTextValidity}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
        />
      );
    }

  }

  return WithFormValidation;
};

export default withFormValidation;
