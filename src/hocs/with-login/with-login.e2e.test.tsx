import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import withLogin from './with-login';

describe(`withLogin hoc e2e tests`, () => {

  const MockComponent = ({
    onEmailChange,
    onPasswordChange,
    onSubmit,
    emailError,
    passwordError,
    isValid,
  }: {
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    emailError: boolean;
    passwordError: boolean;
    isValid: boolean;
  }) => (
    <form data-testid="form" onSubmit={onSubmit}>
      <input data-testid="email" onChange={onEmailChange} />
      <input data-testid="password" onChange={onPasswordChange} />
      <span data-testid="email-error">{String(emailError)}</span>
      <span data-testid="password-error">{String(passwordError)}</span>
      <span data-testid="is-valid">{String(isValid)}</span>
      <button type="submit">Submit</button>
    </form>
  );

  const Wrapped = withLogin(MockComponent);
  const onLogin = vi.fn();

  beforeEach(() => {
    onLogin.mockClear();
  });

  it(`Should set emailError to false for valid email`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`email`), { target: { value: `mail@email.com` } });
    expect(screen.getByTestId(`email-error`)).toHaveTextContent(`false`);
  });

  it(`Should set emailError to true for invalid email`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`email`), { target: { value: `lalala` } });
    expect(screen.getByTestId(`email-error`)).toHaveTextContent(`true`);
  });

  it(`Should set passwordError to false for valid password`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`password`), { target: { value: `1234` } });
    expect(screen.getByTestId(`password-error`)).toHaveTextContent(`false`);
  });

  it(`Should set passwordError to true for invalid password`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`password`), { target: { value: `123` } });
    expect(screen.getByTestId(`password-error`)).toHaveTextContent(`true`);
  });

  it(`Valid email and password should mark form as valid`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`email`), { target: { value: `mail@email.com` } });
    fireEvent.change(screen.getByTestId(`password`), { target: { value: `1234` } });
    expect(screen.getByTestId(`is-valid`)).toHaveTextContent(`true`);
  });

  it(`If email and password are correct, should call onLogin function from props`, () => {
    render(<Wrapped onLogin={onLogin} />);
    fireEvent.change(screen.getByTestId(`email`), { target: { value: `mail@email.com` } });
    fireEvent.change(screen.getByTestId(`password`), { target: { value: `1234` } });
    fireEvent.submit(screen.getByTestId(`form`));
    expect(onLogin).toHaveBeenCalledTimes(1);
    expect(onLogin).toHaveBeenCalledWith({ email: `mail@email.com`, password: `1234` });
  });

});
