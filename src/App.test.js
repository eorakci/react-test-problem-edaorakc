import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test('button initially displays click me', () => {
  render(<App />);
  const initial = screen.getByText(/click me/i);
  expect(initial).toBeInTheDocument();
});

test('button displays thanks when clicked', () => {
  render(<App />);
  const gotButton = screen.getByRole('button', {name: 'click me'})
  fireEvent.click(gotButton)
  const final = screen.getByText(/thanks/i);
  expect(final).toBeInTheDocument();
});

// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library