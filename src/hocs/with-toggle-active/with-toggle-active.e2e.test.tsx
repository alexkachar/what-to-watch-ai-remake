import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import withToggleActive from './with-toggle-active';

describe(`withToggleActive hoc`, () => {

  const MockComponent = ({
    isActive,
    onSetActive,
    onSetInactive,
  }: {
    isActive: boolean;
    onSetActive: () => void;
    onSetInactive: () => void;
  }) => (
    <div>
      <span data-testid="is-active">{String(isActive)}</span>
      <button onClick={onSetActive}>Set Active</button>
      <button onClick={onSetInactive}>Set Inactive</button>
    </div>
  );

  const Wrapped = withToggleActive(MockComponent);

  it(`initial state set correctly`, () => {
    render(<Wrapped />);
    expect(screen.getByTestId(`is-active`)).toHaveTextContent(`false`);
  });

  it(`isActive changes correctly to true`, () => {
    render(<Wrapped />);
    fireEvent.click(screen.getByText(`Set Active`));
    expect(screen.getByTestId(`is-active`)).toHaveTextContent(`true`);
  });

  it(`isActive changes correctly to false`, () => {
    render(<Wrapped />);
    fireEvent.click(screen.getByText(`Set Active`));
    fireEvent.click(screen.getByText(`Set Inactive`));
    expect(screen.getByTestId(`is-active`)).toHaveTextContent(`false`);
  });

});
