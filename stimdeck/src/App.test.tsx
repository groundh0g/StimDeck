import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders column header and content divs', () => {
  render(<App theme="light" columnSize="small" />);

  const columnHeaderElements = screen.getAllByText(/groundh0g/i);
  const columnContentElements = screen.getAllByText(/Loading .../i);

  expect(columnHeaderElements[0]).toBeInTheDocument();
  expect(columnContentElements[0]).toBeInTheDocument();
});
