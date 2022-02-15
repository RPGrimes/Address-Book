import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from "./App";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Address Book/i);
  expect(linkElement).toBeInTheDocument();
});
