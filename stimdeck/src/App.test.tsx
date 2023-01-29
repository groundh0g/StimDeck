import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {SetColumnSizeFunction, SetThemeFunction} from "./components/columns/Types";

test('renders column header and content divs', () => {
  render(<App
      theme="light"
      columnSize="small"
      setTheme={((self, event, theme) => { /**/ }) as SetThemeFunction}
      setColumnSize={((self, event, columnSize) => { /**/ }) as SetColumnSizeFunction} />);

  const columnHeaderElements = screen.getAllByText(/groundh0g/i);
  const columnContentElements = screen.getAllByText(/Loading .../i);

  expect(columnHeaderElements[0]).toBeInTheDocument();
  expect(columnContentElements[0]).toBeInTheDocument();
});
