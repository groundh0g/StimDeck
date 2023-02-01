import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Theme } from "./components/columns/Types";
import {ColumnSize, DoActionFunction, Theme} from "./components/columns/Types";

// const emptySetColumnSize: SetColumnSizeFunction = (() => { /**/ });
// const emptySetTheme: SetThemeFunction = (() => { /**/ });
const emptyDoAction: DoActionFunction = (() => { /**/ });

const onColumnSizeChanged = ((event, columnSize) : void => {
    (document.querySelector(".app") as HTMLElement).dataset["colSize"] = columnSize as ColumnSize;
}) as DoActionFunction;

const onThemeChanged = ((event, theme) : void => {
    (document.querySelector(".app") as HTMLElement).dataset["theme"] = theme as Theme;
}) as DoActionFunction;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App theme={"light"}
         columnSize={"small"}
         themeChanged={onThemeChanged}
         columnSizeChanged={onColumnSizeChanged}
         reloadAllColumns={emptyDoAction}
         closeAllColumns={emptyDoAction}
         blacklistKeywords={[]}
         blacklistMaxHashtags={9999}
         blacklistMaxMentions={9999}
         whitelistUsers={[]}
         whitelistFollowers={false}
         whitelistFollowing={false}
         saveChanges={emptyDoAction}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
