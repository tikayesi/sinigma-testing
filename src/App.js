import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import ColumnLayout from "./layout/ColumnLayout";
import Sidebar from "./layout/Sidebar";
import AppRouters from "./routes/AppRouters";

export const App = () => {
  return (
    <Router>
      <div>
       {/* <Sidebar/>
        <AppRouters/> */}
        <ColumnLayout/>
      </div>
    </Router>
  );
};

