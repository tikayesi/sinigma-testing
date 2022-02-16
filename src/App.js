import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainRouters from "./routes/MainRouters";

export const App = () => {
  return (
    <Router>
      <div>
        <MainRouters/>
      </div>
    </Router>
  );
};

