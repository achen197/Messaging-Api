import { Router } from "react-router-dom";
import React from "react";
import { Routes } from "./Routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
