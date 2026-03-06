import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import withFormValidation from './with-form-validation';

describe(`withFormValidation hoc e2e tests`, () => {

  const MockComponent = ({
    rating,
    text,
    isRatingValid,
    isTextValid,
    onTextChange,
    onRatingChange,
  }: {
    rating: number;
    text: string;
    isRatingValid: boolean;
    isTextValid: boolean;
    onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <div>
      <span data-testid="rating">{rating}</span>
      <span data-testid="is-rating-valid">{String(isRatingValid)}</span>
      <span data-testid="is-text-valid">{String(isTextValid)}</span>
      <textarea data-testid="text-input" onChange={onTextChange} value={text} />
      <input type="number" data-testid="rating-input" onChange={onRatingChange} value={rating} />
    </div>
  );

  const Wrapped = withFormValidation(MockComponent);

  it(`Initial state set correctly`, () => {
    render(<Wrapped />);
    expect(screen.getByTestId(`rating`)).toHaveTextContent(`3`);
    expect(screen.getByTestId(`is-rating-valid`)).toHaveTextContent(`true`);
    expect(screen.getByTestId(`is-text-valid`)).toHaveTextContent(`false`);
  });

  it(`Valid review text should change isTextValid to true`, () => {
    render(<Wrapped />);
    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    fireEvent.change(screen.getByTestId(`text-input`), { target: { value: text } });
    expect(screen.getByTestId(`is-text-valid`)).toHaveTextContent(`true`);
  });

  it(`Invalid review text should change isTextValid to false`, () => {
    render(<Wrapped />);
    fireEvent.change(screen.getByTestId(`text-input`), { target: { value: `lalala.` } });
    expect(screen.getByTestId(`is-text-valid`)).toHaveTextContent(`false`);
  });

  it(`Valid rating should keep isRatingValid as true`, () => {
    render(<Wrapped />);
    fireEvent.change(screen.getByTestId(`rating-input`), { target: { value: `5` } });
    expect(screen.getByTestId(`is-rating-valid`)).toHaveTextContent(`true`);
  });

  it(`Invalid rating should change isRatingValid to false`, () => {
    render(<Wrapped />);
    fireEvent.change(screen.getByTestId(`rating-input`), { target: { value: `0` } });
    expect(screen.getByTestId(`is-rating-valid`)).toHaveTextContent(`false`);
  });

});
