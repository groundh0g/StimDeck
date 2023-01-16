import React from 'react';
import './App.css';
import { ColumnHeader } from "./components/columns/ColumnHeader";
import {ColumnContent} from "./components/columns/ColumnContent";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header pageBackgroundImage">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*  /!*<p>*!/*/}
      {/*  /!*  Edit <code>src/App.tsx</code> and save to re-reload.*!/*/}
      {/*  /!*</p>*!/*/}
      {/*  /!*<a*!/*/}
      {/*  /!*  className="App-link"*!/*/}
      {/*  /!*  href="https://reactjs.org"*!/*/}
      {/*  /!*  target="_blank"*!/*/}
      {/*  /!*  rel="noopener noreferrer"*!/*/}
      {/*  /!*>*!/*/}
      {/*  /!*  Learn React*!/*/}
      {/*  /!*</a>*!/*/}
      {/*</header>*/}
      <div className="App-header backgroundPage">
          <div className="navBar">
              NAVBAR
          </div>
          <div className="contentColumns">
              <div className="contentColumn column-1">
                  <div className="contentColumnHeader">
                      <ColumnHeader key="1" foo={1} />
                  </div>
                  <div className="contentColumnContent">
                      <ColumnContent key="1" foo={1} />
                  </div>
              </div>
              <div className="contentColumn column-2">
                  <div className="contentColumnHeader">
                      <ColumnHeader key="2" foo={2} />
                  </div>
                  <div className="contentColumnContent">
                      <ColumnContent key="2" foo={2} />
                  </div>
              </div>
              <div className="contentColumn column-3">
                  <div className="contentColumnHeader">
                      <ColumnHeader key="3" foo={3} />
                  </div>
                  <div className="contentColumnContent">
                      <ColumnContent key="3" foo={3} />
                  </div>
              </div>
              {/*<div className="contentColumn column-4">*/}
              {/*    <div className="contentColumnHeader">*/}
              {/*        <ColumnHeader key="4" foo={4} />*/}
              {/*    </div>*/}
              {/*    <div className="contentColumnContent">*/}
              {/*        <ColumnContent key="4" foo={4} />*/}
              {/*    </div>*/}
              {/*</div>*/}
          </div>
      </div>
    </div>
  );
}

export default App;
