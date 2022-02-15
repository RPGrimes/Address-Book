import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import App from '../../App';

it("renders App component correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Welcome to Anonymeet/i)).toBeInTheDocument();
});