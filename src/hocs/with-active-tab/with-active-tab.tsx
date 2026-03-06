import * as React from 'react';
import {MovieTabs} from '../../constants';

interface State {
  activeTab: string;
}

const withActiveTab = (Component) => {

  type P = React.ComponentProps<typeof Component>;

  class WithActiveTab extends React.PureComponent<P, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieTabs.OVERVIEW
      };

      this._handleTabSwitch = this._handleTabSwitch.bind(this);
    }

    _handleTabSwitch(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          onTabSwitch={this._handleTabSwitch}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
