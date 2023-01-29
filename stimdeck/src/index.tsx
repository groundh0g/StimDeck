import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Theme } from "./components/columns/Types";
import {setColumnSize, setTheme} from './AppFunctions';
import {SetColumnSizeFunction, SetThemeFunction} from "./components/columns/Types";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App theme="light" columnSize="small"
         setTheme={setTheme as SetThemeFunction}
         setColumnSize={setColumnSize as SetColumnSizeFunction} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
