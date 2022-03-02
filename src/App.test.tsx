import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should renders Loading Constructors', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading Constructors.../i);
  expect(linkElement).toBeInTheDocument();
});
