import * as React from 'react';

interface State {
  isActive: boolean;
}

const withToggleActive = (Component) => {

  type P = React.ComponentProps<typeof Component>;

  class WithToggleActive extends React.PureComponent<P, State> {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleSetActive = this._handleSetActive.bind(this);
      this._handleSetInactive = this._handleSetInactive.bind(this);
    }

    _handleSetActive() {
      this.setState({
        isActive: true
      });
    }

    _handleSetInactive() {
      this.setState({
        isActive: false
      });
    }

    render() {
      const {isActive} = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          onSetActive={this._handleSetActive}
          onSetInactive={this._handleSetInactive}
        />
      );
    }
  }

  return WithToggleActive;
};

export default withToggleActive;
