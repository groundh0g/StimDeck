import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {DoActionFunction, SetColumnSizeFunction, SetThemeFunction} from "./components/columns/Types";
import {AppSettingsPopup} from "./components/AppSettingsPopup";

const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

test('renders column header and content divs', () => {
  render(<App
      theme={"light"}
      columnSize={"small"}
      themeChanged={emptySetTheme}
      columnSizeChanged={emptySetColumnSize}
      reloadAllColumns={emptyDoAction}
      closeAllColumns={emptyDoAction}
      blacklistKeywords={[]}
      blacklistMaxHashtags={9999}
      blacklistMaxMentions={9999}
      whitelistUsers={[]}
      whitelistFollowers={false}
      whitelistFollowing={false}
      saveChanges={emptyDoAction}
  />);

  const columnHeaderElements = screen.getAllByText(/groundh0g/i);
  const columnContentElements = screen.getAllByText(/Loading .../i);

  expect(columnHeaderElements[0]).toBeInTheDocument();
  expect(columnContentElements[0]).toBeInTheDocument();
});
