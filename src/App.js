import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Main />
            </div>
          }
        />
        <Route
          exact
          path="/music"
          element={
            <div>
              <Main />
            </div>
          }
        />
        <Route
          exact
          path="/dev"
          element={
            <div>
              <Main />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
