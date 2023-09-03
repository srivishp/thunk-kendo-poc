import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/A Thunk & Kendo React POC/i);
  expect(linkElement).toBeInTheDocument();
});
