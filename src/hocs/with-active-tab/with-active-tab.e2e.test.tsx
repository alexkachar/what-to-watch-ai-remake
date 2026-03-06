import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import withActiveTab from './with-active-tab';
import { MovieTabs } from '../../constants';

describe(`withActiveTab hoc e2e test`, () => {

  const MockComponent = ({ activeTab, onTabSwitch }: { activeTab: string; onTabSwitch: (tab: string) => void }) => (
    <div>
      <span data-testid="active-tab">{activeTab}</span>
      <button onClick={() => onTabSwitch(MovieTabs.DETAILS)}>Switch to Details</button>
    </div>
  );

  const Wrapped = withActiveTab(MockComponent);

  it(`initial state set correctly`, () => {
    render(<Wrapped />);
    expect(screen.getByTestId(`active-tab`)).toHaveTextContent(MovieTabs.OVERVIEW);
  });

  it(`activeTab changes correctly to a given value`, () => {
    render(<Wrapped />);
    fireEvent.click(screen.getByText(`Switch to Details`));
    expect(screen.getByTestId(`active-tab`)).toHaveTextContent(MovieTabs.DETAILS);
  });

});
